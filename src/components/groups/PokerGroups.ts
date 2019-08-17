import * as PIXI from "pixi.js"
import WrapperContainer from '@/components/elements/WrapperContainer'
import Wrapper from '@/components/elements/Wrapper'
import PokerGroup from '@/components/groups/PokerGroup'
import dat from 'dat.gui'
import Poker from "@/components/elements/Poker";
import pokerType from "@/config/pokerType";



export default class PokerGroups implements Wrapper{
  private _wrapper: Wrapper
  private pokerGroupPlayer: PokerGroup
  private pokerGroupBanker: PokerGroup
  
  private pokerGroupPlayerSetting: {[s:string]: number} = {x: 470, y: -160, rotation: 3.69, scale: 0.22}
  private pokerGroupBankerSetting: {[s:string]: number} = {x: -330, y: -160, rotation: 3.69, scale: 0.22}

  constructor() {
    this._wrapper = new WrapperContainer()
    this.pokerGroupPlayer = new PokerGroup()
    this.pokerGroupBanker = new PokerGroup()
    this._wrapper.addChild(this.pokerGroupPlayer)
    this._wrapper.addChild(this.pokerGroupBanker)
    this.pokerGroupPlayer.setPosition(false, 400, 400)
    this.pokerGroupBanker.setPosition(false, 1180, 400)
  }

  public addPlayerPoker (type: keyof typeof pokerType, value: string) {
    this.pokerGroupPlayer.addpoker(new Poker(type, value, this.pokerGroupPlayerSetting))
  }

  public setPlayerWin() {
    this.pokerGroupPlayer.displayWin()
  }

  public setPlayerPoint(n: number) {
    this.pokerGroupPlayer.displayPokerPoint(n)
  }



  public addBankerPoker (type: keyof typeof pokerType, value: string) {
    this.pokerGroupBanker.addpoker(new Poker(type, value, this.pokerGroupBankerSetting))
  }

  public setBankerWin() {
    this.pokerGroupBanker.displayWin()
  }

  public setBankerPonit(n: number) {
    this.pokerGroupBanker.displayPokerPoint(n)
  }

  public resetPoker() {
    this.pokerGroupBanker.resetPoker()
    this.pokerGroupPlayer.resetPoker()
  }
  // ====
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
    this._wrapper.setScale(animation, scale_x, scale_y)
  }

  public setInteractive(interactive: boolean): void{
    this._wrapper.setInteractive(interactive)
  }

  public setRotation(animation: boolean, rotation: number): void {
    this._wrapper.setRotation(animation, rotation)
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