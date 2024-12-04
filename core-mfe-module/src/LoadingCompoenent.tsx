import React, { FC, Suspense } from 'react'
import { loadRemote } from '@module-federation/runtime';
export * from '@module-federation/runtime';
interface IRemoteComponentBase {
  loadingFallback?: React.ReactNode
}
interface IRemoteComponentP extends IRemoteComponentBase {
  loading: Promise<any>
}
interface IPathModule {
  scope: string,
  module: string
}
interface IRemoteComponentR extends IRemoteComponentBase {
  modulePath: IPathModule | string
}

export function CreateRemoteComponent(optiops: IRemoteComponentP | IRemoteComponentR) {
  const ComponentLazy = React.lazy(() => {
    let container: any
    let pathFull = ''
    if ('loading' in optiops) {
      pathFull = typeof optiops.loading
      container = optiops.loading
    } else {
      pathFull = typeof optiops.modulePath === 'object' ? `${optiops.modulePath.scope}/${optiops.modulePath.module}` : optiops.modulePath
      container = loadRemote<any>(pathFull)
    }
    try {
      return container.then((module: any) => {
        return module.Adapter ? { default: module.Adapter } : module
      })
    } catch (error) {
      console.error(`Error loading remote module ${pathFull}:`, error);
      return Promise.resolve(<></>)

    }
  })
  const LoadingMFE: FC<any> = (props) => {
    return (
      <Suspense fallback={optiops.loadingFallback ?? 'loading...'}>
        <ComponentLazy {...props} />
      </Suspense>
    )
  }
  return LoadingMFE
}
