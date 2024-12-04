export declare const getWindowHandler: <TModel = any>(key: string) => TModel;
export declare const CreateActionSingle: <TFuc extends (...params: any) => any>(key: string, action: TFuc) => TFuc;
