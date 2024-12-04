export * from './LoadingCompoenent';
export * from './Helper';
export * from './AccessoryGlobal'
export * from './DynamicLoader'

if (!(globalThis as any).__CORE_MFE_SINGLETON__) {
    (globalThis as any).__CORE_MFE_SINGLETON__ = { instance: "core-mfe-module instance" };
    console.log("Singleton instance created!");
} else {
    console.log("Reused existing singleton instance.");
}
export const __CORE_MFE_SINGLETON__ = (globalThis as any).__CORE_MFE_SINGLETON__
