class mock {
  private cbs: { [s: string]: Array<Function> } = {}

  public on(event: string, listener: Function) {
    if (!this.cbs[event]) {
      this.cbs[event] = []
    }
    this.cbs[event].push(listener)
  }

  public emit(event: string, ...args: any[]) {
    let listeners
    let length
    if (!this.cbs[event]) {return}
    listeners = this.cbs[event].slice()
    length = listeners.length
    for (var i = 0; i < length; i++) {
      listeners[i](...args)
    }
  }
}

export default new mock()