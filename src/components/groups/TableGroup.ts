import * as PIXI from "pixi.js"
import WrapperContainer from '@/components/elements/WrapperContainer'
import WrapperContainerCenter from '@/components/elements/WrapperContainerCenter'
import Wrapper from '@/components/elements/Wrapper'
import Poker from '@/components/elements/Poker'
import PokerPoint from '@/components/elements/PokerPoint'
import PokerWin from '@/components/elements/PokerWin'
import Desk from '@/components/elements/Desk'
import DeskHover from '@/components/elements/DeskHover'
import Dealer from '@/components/elements/Dealer'
import Countdown from '@/components/elements/Countdown'
import imagePath from '@/config/imagePath'
import dat from 'dat.gui'

export default class TableGroup implements Wrapper{
    private _wrapper: Wrapper
    private _centerWrapper: Wrapper
    private _desk: Desk
    private _deskHover_playerpair: Wrapper
    private _deskHover_playerking: Wrapper
    private _deskHover_tiepair: Wrapper
    private _deskHover_tie: Wrapper
    private _deskHover_bankerking: Wrapper
    private _deskHover_banker: Wrapper
    private _deskHover_bankerpair: Wrapper
    private _deskHover_player: Wrapper
    private _dealer: Wrapper
    private _countdown: Wrapper
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
    
    this._centerWrapper.getContainer().pivot.set(this._centerWrapper.width/2, this._centerWrapper.height/2)
    this._centerWrapper.setPosition(false, this._centerWrapper.width/2, this._centerWrapper.height/2)

    let maskGraphic = new PIXI.Graphics()
    maskGraphic.beginFill(0xff0000)
    maskGraphic.alpha = 0
    maskGraphic.drawRect(0, 0, 1625, 900)
    maskGraphic.endFill()
    this._wrapper.addContainer(maskGraphic)
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

  private settingHover(w: Wrapper) {
    w.setInteractive(true)
    w.setAlpha(false, 0)
    w.on('pointerdown', () => {
      w.setAlpha(true, 1)
    })
    w.on('pointerup', () => {
      setTimeout(()=> {w.setAlpha(true, 0)}, 150)
    })
    w.on('pointerout', () => {
      setTimeout(()=> {w.setAlpha(true, 0)}, 150)
    })
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
  public setSize(animation:boolean, width: number, height: number) {
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

  public setInteractive(interactive: boolean): void{
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