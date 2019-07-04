declare type AnyPromiseFunction = (...args: any) => Promise<any>;
export default class Tattler {
    private uncalledPromise;
    private cb?;
    private promiseFunction;
    private tattle;
    constructor(uncalledPromise: AnyPromiseFunction);
    private createHandler;
    readonly mimic: AnyPromiseFunction;
    readonly wait: Promise<any>;
    setArgs(...args: any[]): void;
}
export {};
