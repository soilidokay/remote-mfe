export const fetchScript = () => {
    return (resolve: any) => {
        const proxy = {
            get: (request: any) => () => () => "Inited arg shared",
            init: (...args: any[]) => {
                try {
                    (window as any).setWebpaclArgShareSingleton(args)
                } catch (e) {
                    console.log("remote container already initialized", e);
                }
            },
        };
        resolve(proxy)
    }
}

export const SetupArgShare = () => {
    return {
        InitialArgShare: "promise new Promise(" + fetchScript() + ")"
    }
}