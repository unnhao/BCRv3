import * as PIXI from "pixi.js"
import Sprite from '@/components/atoms/Sprite'
import WrapperContainer from '@/components/elements/WrapperContainer'
import Wrapper from '@/components/elements/Wrapper'
import CountdownNumber from '@/components/elements/CountdownNumber'
import imagePath from '@/config/imagePath'

export default class Countdown implements Wrapper{
  private _wrapper: Wrapper
  private _countdownNumber: Wrapper
  private _countdownTimer: number = 30
  private _countdownStatus: Wrapper
  private _countdownStatus_beting: Wrapper
  private _countdownStatus_paying: Wrapper

  private _timeout: any
  private _status: string = 'Beting' // 'Beting' || 'Paying'
  private _ontimeup: Function = () => {}
  private _ontimechange: Function = () => {}

  constructor() {
    this._wrapper = new WrapperContainer()

    let _countdown = new Sprite(imagePath.tablePath, 'countdown')
    this._countdownNumber = new WrapperContainer(new CountdownNumber(this._countdownTimer))

    this._countdownStatus = new WrapperContainer()
    this._countdownStatus_beting = new WrapperContainer()
    this._countdownStatus_paying = new WrapperContainer()

    this._wrapper.addContainer(_countdown.getContainer())
    this._wrapper.addChild(this._countdownNumber)
    this._wrapper.addChild(this._countdownStatus)
    
    this._countdownNumber.setPosition(false, this._wrapper.width / 2 - this._countdownNumber.width / 2, this._wrapper.height / 2)
    this._countdownStatus.addChild(this._countdownStatus_beting)
    // this._countdownStatus.addChild(this._countdownStatus_paying)

    this._countdownStatus_beting.addContainer(new Sprite(imagePath.tablePath, `countdownBeting`).getContainer())
    this._countdownStatus_beting.setPosition(false, this._wrapper.width / 2 - this._countdownStatus_beting.width / 2 , 15)
    this._countdownStatus_paying.addContainer(new Sprite(imagePath.tablePath, `countdownPaying`).getContainer())
    this._countdownStatus_paying.setPosition(false, this._wrapper.width / 2 - this._countdownStatus_paying.width / 2 , 20)
  }

  
  public setStatus(status: string) {
    this._countdownStatus.removeChildren()
    if (status === 'Paying') {
      this._countdownStatus.addChild(this._countdownStatus_paying)
    }
    if (status === 'Beting') {
      this._countdownStatus.addChild(this._countdownStatus_beting)
    }
    this._status = status
  }

  private updateTimer() {
    this._countdownNumber.removeChildren()
    this._countdownNumber.addChild(new CountdownNumber(this._countdownTimer))
    this._countdownNumber.setPosition(false, this._wrapper.width / 2 - this._countdownNumber.width / 2, this._wrapper.height / 2)
    this._ontimechange(this._countdownTimer)
  }

  private countdown() {
    if (this._timeout) {
      clearTimeout(this._timeout)
      this._timeout = null
    }
    this._timeout = setTimeout(() => {
      this._countdownTimer--
      this.setCountdownTimer(this._countdownTimer)
      if (this._countdownTimer < 0) { 
        this._countdownTimer = 0
        clearTimeout(this._timeout)
        this._timeout = null
        return this._ontimeup() 
      }
      this.countdown()
    }, 1000)
  }

  public setCountdownTimer(t: number) {
    this._countdownTimer = t
    this.updateTimer()
  }

  public ontimeUp(fun: Function) {
    this._ontimeup = fun
  }

  public ontimeChange(fun: Function) {
    this._ontimechange = fun
  }

  public start() {
    this.countdown()
  }

  public stop() {
    clearTimeout(this._timeout)
  }

  // ============

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