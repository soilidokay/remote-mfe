import { CreateActionSingle, getWindowHandler } from "./Helper"
const whandler = getWindowHandler('z___y3y__1_f')
export class AccessoryGlobal extends Map<string, any> {
    GetValue = <TModel>(key: string) => {
        return this.get(key) as TModel
    }
    SetValue = <TModel>(key: string, value: TModel) => {
        return this.set(key, value)
    }
}
interface CreateAccessoryGlobalOptiobs {
    attachToWindow?: boolean
}

let handler: { instanse?: AccessoryGlobal } = {}
export const CreateAccessoryGlobal = (options?: CreateAccessoryGlobalOptiobs) => {
    if (options?.attachToWindow === true) {
        handler = whandler
    }
    let inst = handler.instanse
    if (!inst) {
        inst = new AccessoryGlobal()
        handler.instanse = inst
    }
    return inst
}
export const CreateAccessoryGlobalSingle = CreateActionSingle("cag", CreateAccessoryGlobal)