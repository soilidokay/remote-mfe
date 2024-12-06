import CMM, { CreateRemoteComponent, dynamicImport, init, loadRemote, loadScript, loadShare, preloadRemote, } from "core-mfe-module"
init({
    name: 'app1',
    remotes: [
        {
            name: 'analytics',
            entry: 'http://localhost:3001/remoteEntry.js?v=' + new Date().getTime(),
            shareScope: 'default'
        },
        {
            name: 'analytics2',
            entry: 'http://localhost:3003/remoteEntry.js?v=' + new Date().getTime(),
        }

    ],
    shared: {
        "core-mfe-module": {
            shareConfig: {
                singleton: true, requiredVersion: '^1.1.7',
            },
        }
    }
});

// loadScript("http://localhost:3001/remoteEntry.js", {}).then((module) => {
//     console.log(module);
// })

export const MFAnalytic = CreateRemoteComponent({ modulePath: "analytics/RemoteApp" })
// export const MFAnalytic = CreateRemoteComponent({ loading: import("analyticss/RemoteApp" as any) })
// export const MFAnalytic = CreateRemoteComponent({ loading: dynamicImport("analytics/RemoteApp", 'http://localhost:3001/remoteEntry.js   ') })
export const MFAnalytic2 = CreateRemoteComponent({ loading: loadRemote("analytics2/RemoteApp2") })

// export const MFAnalytic = CreateRemoteComponent({ loading: dynamicImport("analytics/RemoteApp", "http://localhost:3001/remoteEntry.js") })
// export const MFAnalytic2 = CreateRemoteComponent({ loading: dynamicImport("analytics2/RemoteApp2", "http://localhost:3003/remoteEntry.js") })
