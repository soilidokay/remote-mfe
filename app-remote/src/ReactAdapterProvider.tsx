/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import ReactDOM from 'react-dom/client'

export type ReactAdapterProviderProps<P = any> = P & {
    component: React.FunctionComponent<P> | React.ComponentClass<P> | keyof React.ReactHTML | string
    children?: React.ReactNode
}

export interface ReactAdapterProviderState {
    Component: React.ReactNode
}

class ReactAdapterProvider<P = any> extends React.Component<ReactAdapterProviderProps<P>, ReactAdapterProviderState> {
    private refHold: Element | Document | DocumentFragment | null = null

    constructor(props: ReactAdapterProviderProps<P>) {
        super(props)
        this.refHold
    }

    init = (hydrate?: boolean) => {
        ; (async () => {
            const { component, children, ...rest } = this.props
            if (hydrate && this.refHold) {
                ReactDOM.hydrateRoot(this.refHold as Document, React.createElement(component as string, rest, children))
            } else {
                ReactDOM.createRoot(this.refHold as Element).render(React.createElement(component as string, rest, children))
            }
        })()
    }

    componentDidUpdate() {
        this.init(true)
    }

    componentDidMount() {
        this.init()
    }

    render() {
        return <div style={{ display: 'flex', flex: 1 }} ref={(ref) => (this.refHold = ref)} />
    }
}

export const CreateAdater = (Compoenent: React.ElementType) => {
    const Adapter = React.forwardRef<ReactAdapterProvider, any>((props, ref) => {
        return <ReactAdapterProvider {...props} component={Compoenent} ref={ref} />
    })
    return { Adapter }
}

export default ReactAdapterProvider