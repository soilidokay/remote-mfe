interface IProxy {
  get: (request: string) => any;
  init: () => any;
}
interface RemoteConfig {
  [remoteName: string]: string;
}
const GWindow = window as any
const remoteContainer: Record<string, IProxy> = {}

const setRemoteLink = (remoteName: string, module: IProxy) => {
  const remotes = remoteContainer;
  remotes[remoteName] = module;
};

const loadScripts = (module: string, remoteUrl: string): Promise<IProxy> => {
  if (remoteContainer[module]) {
    return Promise.resolve(remoteContainer[module]);
  }
  return new Promise((resolve, reject) => {
    // This part depends on how you plan on hosting and versioning your federated modules
    const script = document.createElement("script");
    script.onerror = () => {
      document.head.removeChild(script);
      reject("loading " + remoteUrl + " failed!");
    };
    script.async = false;
    script.src = remoteUrl + "?v=" + new Date().getTime();
    script.onload = () => {
      // the injected script has loaded and is available on window
      // we can now resolve this Promise
      const proxy = {
        get: (request: string) => GWindow[module].get(request),
        init: () => {
          try {
            const res = GWindow[module].init(GWindow.__webpack_share_scopes__.default);
            return res
          } catch (e) {
            console.log("remote container already initialized");
          }
        },
      };
      setRemoteLink(module, GWindow[module]);
      resolve(proxy);
    };
    // inject this script with the src set to the versioned remoteEntry.js
    document.head.appendChild(script);
  });
};


function getRemoteUrl(remoteName: string): string {
  const remoteConfig: RemoteConfig = {
    analytics: "http://localhost:3001/remoteEntry.js",
    analytics2: "http://localhost:3003/remoteEntry.js",
    // Thêm các remote khác nếu cần
  };

  const url = remoteConfig[remoteName];
  if (!url) {
    throw new Error(`Remote URL not found for: ${remoteName}`);
  }
  return url;
}
export async function dynamicImport<T = any>(modulePath: string): Promise<T> {
  const [remoteName, module] = modulePath.split("/");
  const remoteUrl = getRemoteUrl(remoteName);

  const container = await loadScripts(remoteName, remoteUrl);
  await container.init()
  const factory = await container.get(`./${module}`);
  return factory() as T;
}
