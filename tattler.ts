type AnyPromiseFunction = (...args: any) => Promise<any>

type ResolveFunction = (value?: unknown) => void

export default class Tattler {
  private uncalledPromise: AnyPromiseFunction // the promise function to be wrapped
  private cb?: ResolveFunction // the resolve function that is defined later
  private promiseFunction: AnyPromiseFunction // the function that when called returns the promise
  private tattle: Promise<any>

  public constructor (uncalledPromise: AnyPromiseFunction) {
    this.uncalledPromise = uncalledPromise

    this.tattle = new Promise((resolve) => {
      this.cb = resolve
    })

    this.promiseFunction = (...args) => uncalledPromise(...args)
      .then(this.createHandler(this.cb))
  }

  private createHandler (cb?: ResolveFunction): ResolveFunction {
    return (result: any) => {
      if (cb !== undefined) {
        cb(result)
      }
      return result
    }
  }

  public get mimic () {
    return this.promiseFunction
  }

  public get wait () {
    return this.tattle
  }

  public setArgs (...args: any[]) {
    this.promiseFunction = () => this.uncalledPromise(...args)
      .then(this.createHandler(this.cb))
  }
}
