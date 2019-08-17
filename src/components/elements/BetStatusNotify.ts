import * as PIXI from "pixi.js"
import Sprite from '@/components/atoms/Sprite'
import WrapperContainer from '@/components/elements/WrapperContainer'
import Wrapper from '@/components/elements/Wrapper'
import WrapperContainerCenter from '@/components/elements/WrapperContainerCenter'
import imagePath from '@/config/imagePath'

export default class BetStatusNotify implements Wrapper {
  private _wrapper: Wrapper
  private _bg: Wrapper
  private _startBet: Wrapper
  private _endBet: Wrapper
  private _lock: boolean = false
  constructor() {
    this._wrapper = new WrapperContainer()
    this._bg = new WrapperContainerCenter()
    this._startBet = new WrapperContainerCenter()
    this._endBet = new WrapperContainerCenter()

    
    this._bg.addContainer(new Sprite(imagePath.tablePath, 'startendbet').getContainer())
    this._startBet.addContainer(new Sprite(imagePath.tablePath, 'startbet').getContainer())
    this._endBet.addContainer(new Sprite(imagePath.tablePath, 'endbet').getContainer())
    
    this._wrapper.addChild(this._bg)
    this._wrapper.addChild(this._startBet)
    this._wrapper.addChild(this._endBet)
    
    
    this._startBet.setPosition(false, this._wrapper.width / 2 - this._startBet.width / 2, 15)
    this._endBet.setPosition(false, this._wrapper.width / 2 - this._endBet.width / 2, 15)

    this._startBet.setAlpha(false, 0)
    this._endBet.setAlpha(false, 0)
    this._bg.setAlpha(false, 0)
  }


  public displayStartBet() {
    if (this._lock) return
    this._lock = true
    this._bg.setAlpha(true, 1)
    this._startBet.setAlpha(true, 1)

    this._bg.setScale(false, 1.5, 1.5)
    this._startBet.setScale(false, 1.2, 1.2)
    
    this._bg.setScale(true, 1, 1)
    this._startBet.setScale(true, 1, 1)
    setTimeout(()=>{
      this._bg.setAlpha(true, 0)
      this._startBet.setAlpha(true, 0)
      this._lock = false

      this._bg.setScale(true, 1.5, 1.5)
      this._startBet.setScale(true, 1.2, 1.2)
    }, 3000)
  }

  public displayEndBet() {
    if (this._lock) return
    this._lock = true
    this._bg.setAlpha(true, 1)
    this._endBet.setAlpha(true, 1)

    this._bg.setScale(false, 1.5, 1.5)
    this._endBet.setScale(false, 1.2, 1.2)

    this._bg.setScale(true, 1, 1)
    this._endBet.setScale(true, 1, 1)
    setTimeout(()=>{
      this._bg.setAlpha(true, 0)
      this._endBet.setAlpha(true, 0)
      this._bg.setScale(true, 1.5, 1.5)
      this._endBet.setScale(true, 1.2, 1.2)
      this._lock = false
    }, 3000)
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
    this._wrapper.setScale(animation, scale_x, scale_y)
  }

  public setInteractive(interactive: boolean): void {
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