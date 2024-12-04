
const GWindow = globalThis as any

export const getWindowHandler = <TModel = any>(key: string) => {
    if (!GWindow[key]) {
        GWindow[key] = {}
    }
    return GWindow[key] as TModel
}

const handerlActions = getWindowHandler<Record<string, any>>('z_c1z_1rr')
export const CreateActionSingle = <TFuc extends (...params: any) => any>(key: string, action: TFuc): TFuc => {
    if (!handerlActions[key]) {
        handerlActions[key] = action
    }
    return handerlActions[key]
}
