import TableGroup from '@/components/groups/TableGroup'
import wrapper from '@/components/elements/WrapperContainer'
import Store from '@/controllers/Store'
import dat from 'dat.gui'
import mock from '@/mock/mock';
import tableChips from '@/config/tableChips';

export default class TableController {
  private tableGroup: TableGroup
  constructor(w: wrapper) {
    this.tableGroup = new TableGroup()
    w.addContainer(this.tableGroup.getContainer())
    this.tableGroup.setPosition(false, 1625 / 2 - 737, 0)
    this.tableGroup.setPosition(true, 1625 / 2 - 737, 200)


    this.tableGroup.onPayout('player', ()=> {
      mock.emit('USER_BET_PAYOUT', {
        type: 'player',
        value: Store.getState().chipStatus
      })
    })

    this.tableGroup.onPayout('playerpair', ()=> {
      mock.emit('USER_BET_PAYOUT', {
        type: 'playerpair',
        value: Store.getState().chipStatus
      })
    })

    this.tableGroup.onPayout('playerking', ()=> {
      mock.emit('USER_BET_PAYOUT', {
        type: 'playerking',
        value: Store.getState().chipStatus
      })
    })

    this.tableGroup.onPayout('tiepair', ()=> {
      mock.emit('USER_BET_PAYOUT', {
        type: 'tiepair',
        value: Store.getState().chipStatus
      })
    })

    this.tableGroup.onPayout('tie', ()=> {
      mock.emit('USER_BET_PAYOUT', {
        type: 'tie',
        value: Store.getState().chipStatus
      })
    })

    this.tableGroup.onPayout('bankerking', ()=> {
      mock.emit('USER_BET_PAYOUT', {
        type: 'bankerking',
        value: Store.getState().chipStatus
      })
    })

    this.tableGroup.onPayout('banker', ()=> {
      mock.emit('USER_BET_PAYOUT', {
        type: 'banker',
        value: Store.getState().chipStatus
      })
    })

    this.tableGroup.onPayout('bankerpair', ()=> {
      mock.emit('USER_BET_PAYOUT', {
        type: 'bankerpair',
        value: Store.getState().chipStatus
      })
    })

    mock.on('SET_COUNTDOWN_TIME', (t: number)=> {
      this.tableGroup.setCountdownTime(t)
    })

    mock.on('SET_COUNTDOWN_START', ()=> {
      this.tableGroup.setCountdownStart()
    })

    mock.on('SET_COUNTDOWN_STOP', ()=> {
      this.tableGroup.setCountdownStop()
    })

    mock.on('SET_COUNTDOWN_STATUS', (s: string)=> {
      this.tableGroup.setCountdownStatus(s)
    })
    // let setting = {
    //   message: 'dat.gui',
    //   userPlayerpairPayout: () => {
    //     this.userPayout('playerpair')
    //   },
    //   userPlayerkingPayout: () => {
    //     this.userPayout('playerking')
    //   },
    //   userTiepairPayout: () => {
    //     this.userPayout('tiepair')
    //   },
    //   userTiePayout: () => {
    //     this.userPayout('tie')
    //   },
    //   userBankerkingPayout: () => {
    //     this.userPayout('bankerking')
    //   },
    //   userBankerPayout: () => {
    //     this.userPayout('banker')
    //   },
    //   userBankerpairPayout: () => {
    //     this.userPayout('bankerpair')
    //   },
    //   userPlayerPayout: () => {
    //     this.userPayout('player')
    //   },
    //   // 
    //   strangerPlayerpairPayout: () => {
    //     this.strangerPayout('playerpair')
    //   },
    //   strangerPlayerkingPayout: () => {
    //     this.strangerPayout('playerking')
    //   },
    //   strangerTiepairPayout: () => {
    //     this.strangerPayout('tiepair')
    //   },
    //   strangerTiePayout: () => {
    //     this.strangerPayout('tie')
    //   },
    //   strangerBankerkingPayout: () => {
    //     this.strangerPayout('bankerking')
    //   },
    //   strangerBankerPayout: () => {
    //     this.strangerPayout('banker')
    //   },
    //   strangerBankerpairPayout: () => {
    //     this.strangerPayout('bankerpair')
    //   },
    //   strangerPlayerPayout: () => {
    //     this.strangerPayout('player')
    //   },
    //   sysSendChips: () => {
    //     // this.sendChips()
    //   },
    //   restPlayerUserChip: () => {
    //     this.restPlayerUserChip()
    //   }
    // }

    // const gui = new dat.GUI()
    // gui.add(setting, 'message')
    // gui.add(setting, 'userPlayerpairPayout')
    // gui.add(setting, 'userPlayerkingPayout')
    // gui.add(setting, 'userTiepairPayout')
    // gui.add(setting, 'userTiePayout')
    // gui.add(setting, 'userBankerkingPayout')
    // gui.add(setting, 'userBankerPayout')
    // gui.add(setting, 'userBankerpairPayout')
    // gui.add(setting, 'userPlayerPayout')
    // // 
    // gui.add(setting, 'strangerPlayerpairPayout')
    // gui.add(setting, 'strangerPlayerkingPayout')
    // gui.add(setting, 'strangerTiepairPayout')
    // gui.add(setting, 'strangerTiePayout')
    // gui.add(setting, 'strangerBankerkingPayout')
    // gui.add(setting, 'strangerBankerPayout')
    // gui.add(setting, 'strangerBankerpairPayout')
    // gui.add(setting, 'strangerPlayerPayout')
    // // 
    // gui.add(setting, 'sysSendChips')
    // gui.add(setting, 'restPlayerUserChip')

    mock.on('MSG_USER_BET_PAYOUT', (e:any) => {
      this.sendChips(e.value, e.type, 'user')
    })
  }
  // 試想一下會有的狀況
  // 輸的時候把輸的區域的籌碼
  // 玩家下注
  public userPayout(type: string) {
    switch (type) {
      case 'playerpair':
        this.tableGroup.userPayout('10000','playerpair')
        break
      case 'playerking':
        this.tableGroup.userPayout('10000', 'playerking')
        break
      case 'tiepair':
        this.tableGroup.userPayout('10000', 'tiepair')
        break
      case 'tie':
        this.tableGroup.userPayout('10000', 'tie')
        break
      case 'bankerking':
        this.tableGroup.userPayout('10000', 'bankerking')
        break
      case 'banker':
        this.tableGroup.userPayout('10000', 'banker')
        break
      case 'bankerpair':
        this.tableGroup.userPayout('10000', 'bankerpair')
        break
      case 'player':
        this.tableGroup.userPayout('10000', 'player')
        break
    }
  }

  // 其他人下注
  public strangerPayout(type: string) {
    switch (type) {
      case 'playerpair':
        this.tableGroup.strangerPayout('10000', 'playerpair')
        break
      case 'playerking':
        this.tableGroup.strangerPayout('10000', 'playerking')
        break
      case 'tiepair':
        this.tableGroup.strangerPayout('10000', 'tiepair')
        break
      case 'tie':
        this.tableGroup.strangerPayout('10000', 'tie')
        break
      case 'bankerking':
        this.tableGroup.strangerPayout('10000', 'bankerking')
        break
      case 'banker':
        this.tableGroup.strangerPayout('10000', 'banker')
        break
      case 'bankerpair':
        this.tableGroup.strangerPayout('10000', 'bankerpair')
        break
      case 'player':
        this.tableGroup.strangerPayout('10000', 'player')
        break
    }
  }

  // 停止下注
  public stopPayout() {

  }

  // 開始下注
  public startPayout() {

  }

  // 退回所有Chips
  public restPlayerUserChip() {
    this.tableGroup.sendBackChips('player', 'user')
  }

  // sysSendChips
  public sendChips(value: number, type: keyof typeof tableChips, role: string) {
    this.tableGroup.bcrSendValue(value, type, role)
  }

  // 退回所以其他人的 Chips
  public resetStrangerChips() {
  }
}