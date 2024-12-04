import React from 'react';
export type ReactAdapterProviderProps<P = any> = P & {
    component: React.FunctionComponent<P> | React.ComponentClass<P> | keyof React.ReactHTML | string;
    children?: React.ReactNode;
};
export interface ReactAdapterProviderState {
    Component: React.ReactNode;
}
declare class ReactAdapterProvider<P = any> extends React.Component<ReactAdapterProviderProps<P>, ReactAdapterProviderState> {
    private refHold;
    constructor(props: ReactAdapterProviderProps<P>);
    init: (hydrate?: boolean) => void;
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.JSX.Element;
}
export declare const CreateAdater: (Compoenent: React.ElementType) => {
    Adapter: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<ReactAdapterProvider<any>>>;
};
export default ReactAdapterProvider;
