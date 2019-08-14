import * as PIXI from "pixi.js"
import WrapperContainer from '@/components/elements/WrapperContainer'
import Wrapper from '@/components/elements/Wrapper'
import Poker from '@/components/elements/Poker'
import PokerPoint from '@/components/elements/PokerPoint'
import PokerWin from '@/components/elements/PokerWin'
import dat from 'dat.gui'

export default class PokerGroups implements Wrapper{
  private _wrapper: Wrapper
  private _centerWrapper: Wrapper
  private _pokerWrapper:　Wrapper
  private _pokerPointWrapper:　Wrapper
  private _pokerWinWrapper: Wrapper
  private _pokerList: Array<Poker> = []
  constructor() {
    this._wrapper = new WrapperContainer()
    this._centerWrapper = new WrapperContainer()
    this._pokerWrapper = new WrapperContainer()
    this._pokerPointWrapper = new WrapperContainer()
    this._pokerWinWrapper = new WrapperContainer()

    this._centerWrapper.addChild(this._pokerWrapper)
    this._centerWrapper.addChild(this._pokerPointWrapper)
    this._centerWrapper.addChild(this._pokerWinWrapper)
    // 500
    this._centerWrapper.getContainer().pivot.set(this._centerWrapper.width/2, this._centerWrapper.height/2)
    this._centerWrapper.setPosition(false, this._centerWrapper.width/2, this._centerWrapper.height/2)
    this._wrapper.addChild(this._centerWrapper)

    this.updatePokerPosition()
  }

  public addpoker(poker: Poker) {
    this._pokerList.push(poker)
    this.updatePokerPosition()
    setTimeout(()=> poker.fanPoker(), 2000)
  }

  public updatePokerPosition() {
    for (let index in this._pokerList) {
      let reverseIndex = this._pokerList.length - Number(index)
      this._pokerWrapper.addChild(this._pokerList[index])
      this._pokerList[index].setPosition(true, (reverseIndex - 1) * -40, 0)
    }
  }

  public displayPokerPoint() {
    this._pokerPointWrapper.removeChildren()
    let score = 0
    for (let poker of this._pokerList) {
      score+= poker.getPoint()
    }
    score = score % 10
    let point = new PokerPoint(score)
    this._pokerPointWrapper.addChild(point)
    point.setPosition(false, -15 , 160)
  }

  public displayWin() {
    let win = new PokerWin()
    this._pokerWinWrapper.addChild(win)
    win.setPosition(false , -80, -138)
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