import { CreateActionSingle, getWindowHandler } from "./Helper";

interface IProxy {
    get: (request: string) => any;
    init: () => any;
}
interface RemoteConfig {
    [remoteName: string]: string;
}
const GWindow = window as any
const remoteContainer: Record<string, IProxy> = getWindowHandler('z_rtctn')

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
                        const args = getWebpaclArgShareSingleton()
                        if (!args.data) {
                            args.data = []
                        } else if (!Array.isArray(args.data)) {
                            args.data = [args.data]
                        }
                        const res = GWindow[module].init(...args.data);
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

export async function dynamicImport<T = any>(modulePath: string, remoteUrl: string): Promise<T> {
    const [remoteName, module] = modulePath.split("/");
    const container = await loadScripts(remoteName, remoteUrl);
    await container.init()
    const factory = await container.get(`./${module}`);
    return factory() as T;
}

// const webpackShared = getWindowHandler("awps")
const webpackShared = {} as any
const getWebpaclArgShare = () => {
    return webpackShared
}
export const getWebpaclArgShareSingleton = CreateActionSingle('_zzd1', getWebpaclArgShare)

const setWebpaclArgShare = (data: any) => {
    webpackShared.data = data
}
export const setWebpaclArgShareSingleton = CreateActionSingle('_zzd2', setWebpaclArgShare);
(window as any).setWebpaclArgShareSingleton = setWebpaclArgShareSingleton

export const InitialArgShare = () => {
    import("InitialArgShare" as any)
    return "InitialArgShare"
}