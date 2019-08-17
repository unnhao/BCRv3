class Store {
  private subs: Array<Function> = []
  private store: any = {
    'chipStatus' : '1000',
    'money' : 0,
    'banker': 0,
    'bankerking': 0,
    'bankerpair': 0,
    'player': 0,
    'playerking': 0,
    'playerpair': 0,
    'tie': 0,
    'tiepair': 0
  }
  constructor() {}

  public dispatch (action: string, payload: any) {
    switch (action) {
      case 'UPDATE_CHIP_STATUS':
        this.store.chipStatus = payload
        break
      case 'UPDATE_MONEY_STATUS':
        this.store.money = payload
        break
    }
    this.notify()
  }

  public subscript(cb: Function) {
    this.subs.push(cb)
  }

  private notify() {
    for (let sub of this.subs) { 
      sub()
    }
  }

  public getState():any {
    return this.store
  }
}

export default new Store()