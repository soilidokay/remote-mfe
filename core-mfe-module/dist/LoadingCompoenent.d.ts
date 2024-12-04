import React from 'react';
export * from '@module-federation/runtime';
interface IRemoteComponentBase {
    loadingFallback?: React.ReactNode;
}
interface IRemoteComponentP extends IRemoteComponentBase {
    loading: Promise<any>;
}
interface IPathModule {
    scope: string;
    module: string;
}
interface IRemoteComponentR extends IRemoteComponentBase {
    modulePath: IPathModule | string;
}
export declare function CreateRemoteComponent(optiops: IRemoteComponentP | IRemoteComponentR): React.FC<any>;
