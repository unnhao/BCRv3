import * as PIXI from "pixi.js"
import WrapperContainer from '@/components/elements/WrapperContainer'
import Wrapper from '@/components/elements/Wrapper'
import Info from '@/components/elements/Info'
import BetStatusNotify from '@/components/elements/BetStatusNotify'
import chipType from '@/config/chipType'
import dat from 'dat.gui'

export default class InterFaceGroup implements Wrapper{
  private _wrapper: Wrapper
  private _centerWrapper: Wrapper
  private info: Info
  private betStatusNotify: BetStatusNotify
  constructor() {
    this._wrapper = new WrapperContainer()
    this._centerWrapper = new WrapperContainer()
    this.info = new Info()
    this.betStatusNotify = new BetStatusNotify()
    this._centerWrapper.addChild(this.info)
    this._centerWrapper.addChild(this.betStatusNotify)

    this.info.setPosition(false, 40 , 900 - this.info.height - 40)
    this.betStatusNotify.setPosition(false, 1625 / 2 - this.betStatusNotify.width / 2  , 900 / 2 - this.betStatusNotify.height / 2 )

    this._centerWrapper.getContainer().pivot.set(this._centerWrapper.width/2, this._centerWrapper.height/2)
    this._centerWrapper.setPosition(false, this._centerWrapper.width/2, this._centerWrapper.height/2)
    this._wrapper.addChild(this._centerWrapper)
  }

  public startBetNotify() {
    this.betStatusNotify.displayStartBet()
  }

  public endBetNotify() {
    this.betStatusNotify.displayEndBet()
  }

  public updateMoney(number: number) {
    this.info.updateMoney(number)
  }

  // =====
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