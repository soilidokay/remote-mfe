export declare class AccessoryGlobal extends Map<string, any> {
    GetValue: <TModel>(key: string) => TModel;
    SetValue: <TModel>(key: string, value: TModel) => this;
}
interface CreateAccessoryGlobalOptiobs {
    attachToWindow?: boolean;
}
export declare const CreateAccessoryGlobal: (options?: CreateAccessoryGlobalOptiobs) => AccessoryGlobal;
export declare const CreateAccessoryGlobalSingle: (options?: CreateAccessoryGlobalOptiobs) => AccessoryGlobal;
export {};
