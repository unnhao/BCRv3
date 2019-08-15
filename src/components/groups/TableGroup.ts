import * as PIXI from "pixi.js"
import WrapperContainer from '@/components/elements/WrapperContainer'
import WrapperContainerCenter from '@/components/elements/WrapperContainerCenter'
import Wrapper from '@/components/elements/Wrapper'
import Poker from '@/components/elements/Poker'
import PokerPoint from '@/components/elements/PokerPoint'
import PokerWin from '@/components/elements/PokerWin'
import Desk from '@/components/elements/Desk'
import DeskHover from '@/components/elements/DeskHover'
import Chip from '@/components/elements/Chip'
import Dealer from '@/components/elements/Dealer'
import Countdown from '@/components/elements/Countdown'
import imagePath from '@/config/imagePath'
import tableChips from '@/config/tableChips'
import {getRandom} from '@/utils/tools'
import dat from 'dat.gui'

export default class TableGroup implements Wrapper {
  private _wrapper: Wrapper
  private _centerWrapper: Wrapper
  private _desk: Desk
  private _deskHover_playerpair: DeskHover
  private _deskHover_playerking: DeskHover
  private _deskHover_tiepair: DeskHover
  private _deskHover_tie: DeskHover
  private _deskHover_bankerking: DeskHover
  private _deskHover_banker: DeskHover
  private _deskHover_bankerpair: DeskHover
  private _deskHover_player: DeskHover
  private _dealer: Wrapper
  private _countdown: Wrapper
  private _chipsWrapper: Wrapper

  private _chips: Array<Chip> = []
  private _playerpair_chips: Array<Chip> = []
  private _playerking_chips: Array<Chip> = []
  private _tiepair_chips: Array<Chip> = []
  private _tie_chips: Array<Chip> = []
  private _bankerking_chips: Array<Chip> = []
  private _banker_chips: Array<Chip> = []
  private _bankerpair_chips: Array<Chip> = []
  private _player_chips: Array<Chip> = []

  constructor() {
    this._wrapper = new WrapperContainer()
    this._centerWrapper = new WrapperContainer()

    this._desk = new Desk()
    this._deskHover_playerpair = new DeskHover('playerpair')
    this._deskHover_playerking = new DeskHover('playerking')
    this._deskHover_tiepair = new DeskHover('tiepair')
    this._deskHover_tie = new DeskHover('tie')
    this._deskHover_bankerking = new DeskHover('bankerking')
    this._deskHover_banker = new DeskHover('banker')
    this._deskHover_bankerpair = new DeskHover('bankerpair')
    this._deskHover_player = new DeskHover('player')
    this._dealer = new WrapperContainer()
    this._countdown = new WrapperContainer()
    this._chipsWrapper = new WrapperContainer()

    this._centerWrapper.addChild(this._desk)
    this._centerWrapper.addChild(this._deskHover_playerpair)
    this._centerWrapper.addChild(this._deskHover_playerking)
    this._centerWrapper.addChild(this._deskHover_tiepair)
    this._centerWrapper.addChild(this._deskHover_tie)
    this._centerWrapper.addChild(this._deskHover_bankerking)
    this._centerWrapper.addChild(this._deskHover_banker)
    this._centerWrapper.addChild(this._deskHover_bankerpair)
    this._centerWrapper.addChild(this._deskHover_player)
    this._centerWrapper.addChild(this._dealer)
    this._centerWrapper.addChild(this._countdown)
    this._centerWrapper.addChild(this._chipsWrapper)

    this._centerWrapper.getContainer().pivot.set(this._centerWrapper.width / 2, this._centerWrapper.height / 2)
    this._centerWrapper.setPosition(false, this._centerWrapper.width / 2, this._centerWrapper.height / 2)

    // let maskGraphic = new PIXI.Graphics()
    // maskGraphic.beginFill(0xff0000)
    // maskGraphic.alpha = 0
    // maskGraphic.drawRect(0, 0, 1625, 900)
    // maskGraphic.endFill()
    // this._wrapper.addContainer(maskGraphic)
    this._wrapper.addChild(this._centerWrapper)
    this.initPosition()
    this.initHover()
  }

  private initPosition() {
    let config = {
      'playerpair': {
        x: 198,
        y: 52
      },
      'playerking': {
        x: 345,
        y: 337
      },
      'tiepair': {
        x: 639,
        y: 336
      },
      'tie': {
        x: 515,
        y: 149
      },
      'bankerking': {
        x: 782,
        y: 337
      },
      'banker': {
        x: 900,
        y: 188
      },
      'bankerpair': {
        x: 854,
        y: 61
      },
      'player': {
        x: 122,
        y: 182
      }
    }
    this._desk.setPosition(true, 0, 0)
    this._deskHover_playerpair.setPosition(false, config['playerpair'].x, config['playerpair'].y)
    this._deskHover_playerking.setPosition(false, config['playerking'].x, config['playerking'].y)
    this._deskHover_tiepair.setPosition(false, config['tiepair'].x, config['tiepair'].y)
    this._deskHover_tie.setPosition(false, config['tie'].x, config['tie'].y)
    this._deskHover_bankerking.setPosition(false, config['bankerking'].x, config['bankerking'].y)
    this._deskHover_banker.setPosition(false, config['banker'].x, config['banker'].y)
    this._deskHover_bankerpair.setPosition(false, config['bankerpair'].x, config['bankerpair'].y)
    this._deskHover_player.setPosition(false, config['player'].x, config['player'].y)
  }

  private initHover() {
    this.settingHover(this._deskHover_playerpair)
    this.settingHover(this._deskHover_playerking)
    this.settingHover(this._deskHover_tiepair)
    this.settingHover(this._deskHover_tie)
    this.settingHover(this._deskHover_bankerking)
    this.settingHover(this._deskHover_banker)
    this.settingHover(this._deskHover_bankerpair)
    this.settingHover(this._deskHover_player)
  }

  // 初始化部分

  private settingHover(deskHover: DeskHover) {
    deskHover.setInteractive(true)
    deskHover.setAlpha(false, 0)
    deskHover.on('touchstart', () => this.deskHoverClick(deskHover))
    deskHover.on('mousedown', () => this.deskHoverClick(deskHover))
    deskHover.on('pointerdown', () => {
      deskHover.setAlpha(true, 1)
    })
    deskHover.on('pointerup', () => {
      setTimeout(() => { deskHover.setAlpha(true, 0) }, 150)
    })
    deskHover.on('pointerout', () => {
      setTimeout(() => { deskHover.setAlpha(true, 0) }, 150)
    })
  }
  
// 初始化部分

// 這邊是對外傳送方法觸發 會在Controller進行store dispatch
  private events:{ [s: string]: Array<Function> } = {}
  private deskHoverClick(deskHover: DeskHover) {
    let triggerListener = (arr: Array<Function>) => {
      if (!arr) return
      arr.map(f => f())
    }
    triggerListener(this.events[deskHover.getType()])
  }

  public onPayout(event: string, listener: any) {
    if (!this.events[event]) {
      this.events[event] = []
    }
    if (this.events[event]) {
      this.events[event].push(listener)
    }
  }
  // 其他CHIPS操作
  private payout(c: Chip) {
    this._chips.push(c)
    this._chipsWrapper.addChild(c)
  }

  public userPayout(type: keyof typeof tableChips) {
    let chip = new Chip('1000', 'user')
    chip.setPosition(false, 500, 600)
    chip.setSize(false, 30, 30)
    chip.setPosition(true, tableChips[type].x  + getRandom(-tableChips[type].xoff, tableChips[type].xoff), tableChips[type].y + getRandom(-tableChips[type].yoff, tableChips[type].yoff))
    this.payout(chip)
  }

  public strangerPayout(type: keyof typeof tableChips) {
    let chip = new Chip('1000', 'stranger')
    chip.setPosition(false, 0, 0)
    chip.setSize(false, 30, 30)
    chip.setPosition(true, tableChips[type].x  + getRandom(-tableChips[type].xoff, tableChips[type].xoff), tableChips[type].y + getRandom(-tableChips[type].yoff, tableChips[type].yoff))
    this.payout(chip)
  }

  public resetStrangerChips() {
  }

  public resetUserChips() {
    for(let c of this._chips){
      if (c.getRole() === 'user') c.setPosition(true, 500, 600)
    }
  }



  // update Position
  /**
   * 
   * @param animation 動畫? 
   * @param x 位置
   * @param y 位置
   */
  public setPosition(animation: boolean, x: number, y: number) {
    this._wrapper.setPosition(animation, x, y)
  }

  /**
   * 設定長寬
   * @param width 寬度
   * @param height 高度
   */
  public setSize(animation: boolean, width: number, height: number) {
    this._wrapper.setSize(animation, width, height)
  }

  public addChild(child: Wrapper): void {
    this._wrapper.addChild(child)
  }

  public addContainer(obj: any): void {
    this._wrapper.addContainer(obj)
  }

  public getContainer(): PIXI.Container {
    return this._wrapper.getContainer()
  }

  public setScale(animation: boolean, scale_x: number, scale_y: number): void {
    this._centerWrapper.setScale(animation, scale_x, scale_y)
  }

  public setInteractive(interactive: boolean): void {
    this._wrapper.setInteractive(interactive)
  }

  public setRotation(animation: boolean, rotation: number): void {
    this._centerWrapper.setRotation(animation, rotation)
  }

  public setAlpha(animation: boolean, alpha: number) {
    this._wrapper.setAlpha(animation, alpha)
  }

  public removeChildren(): void {
    this._wrapper.getContainer().removeChildren()
  }

  public on(event: string, listener: any): void {
    this._wrapper.on(event, listener)
  }

  get x(): number {
    return this._wrapper.x;
  }

  get y(): number {
    return this._wrapper.y;
  }

  get width(): number {
    return this._wrapper.width;
  }

  get height(): number {
    return this._wrapper.height;
  }
}