import wrapper from '@/components/elements/WrapperContainer'
import PokerGroups from '@/components/groups/PokerGroups'
import Store from '@/controllers/Store'
import mock from '@/mock/mock'
import pokerType from '@/config/pokerType'
import dat from 'dat.gui'

export default class PokerController {
  private pokerGroups: PokerGroups
  private stateMoney: Number
  constructor(w: wrapper) {
    this.pokerGroups = new PokerGroups()
    this.stateMoney = Store.getState().money
    w.addChild(this.pokerGroups)
    Store.subscript(this.updateState.bind(this))

    mock.on('ADD_POKER_PLAYER', (t: string, v: string) => {
      this.pokerGroups.addPlayerPoker(t as keyof typeof pokerType, v)
    })

    mock.on('ADD_POKER_BANKER', (t: string, v: string) => {
      this.pokerGroups.addBankerPoker(t as keyof typeof pokerType, v)
    })

    mock.on('SET_POKER_PLAYER_POINT', (n: number) => {
      this.pokerGroups.setPlayerPoint(n)
    })

    mock.on('SET_POKER_BANKER_POINT', (n: number) => {
      this.pokerGroups.setBankerPonit(n)
    })

    mock.on('SET_POKER_PLAYER_WIN', () => {
      this.pokerGroups.setPlayerWin()
    })

    mock.on('SET_POKER_BANKER_WIN', () => {
      this.pokerGroups.setBankerWin()
    })

    mock.on('RESET_POKER', () => {
      this.pokerGroups.resetPoker()
    })
  }


  public setPlayerPoint() {
    
  }

  public setPlayerWin() {
    
  }

  // 

  public addBankerPoker() {

  }

  public setBankerPoint() {
    
  }

  public setBankerWin() {
    
  }

  public updateState() {
    
  }
}