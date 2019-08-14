import * as PIXI from "pixi.js"
import Sprite from '@/components/atoms/Sprite'
import WrapperContainer from '@/components/elements/WrapperContainer'
import Wrapper from '@/components/elements/Wrapper'
import imagePath from '@/config/imagePath'
import WrapperContainerCenter from '@/components/elements/WrapperContainerCenter'

export default class Countdown implements Wrapper {
  private _wrapper: Wrapper
  private _bgCircle: Wrapper
  private _flag: Wrapper
  private _font: Wrapper
  private _star: Wrapper

  constructor() {
    this._wrapper = new WrapperContainer()
    this._bgCircle = new WrapperContainerCenter()
    this._flag = new WrapperContainerCenter()
    this._font = new WrapperContainerCenter()
    this._star = new WrapperContainerCenter()

    this._bgCircle.addContainer(new Sprite(imagePath.winnerPath, 'bgcircle').getContainer())
    this._flag.addContainer(new Sprite(imagePath.winnerPath, 'flag').getContainer())
    this._font.addContainer(new Sprite(imagePath.winnerPath, 'font').getContainer())
    this._star.addContainer(new Sprite(imagePath.winnerPath, 'star').getContainer())

    this._wrapper.addChild(this._bgCircle)
    this._wrapper.addChild(this._flag)
    this._wrapper.addChild(this._font)
    this._wrapper.addChild(this._star)

    this._bgCircle.setPosition(false, this._wrapper.width / 2 - this._bgCircle.width / 2, 0)
    this._flag.setPosition(false, this._wrapper.width / 2 - this._flag.width / 2, this._wrapper.height - 110)
    this._font.setPosition(false, this._wrapper.width / 2 - this._font.width / 2, this._wrapper.height - 140)
    this._star.setPosition(false, this._wrapper.width / 2 - this._star.width / 2 - 25, this._wrapper.height - 125)

    let r = Math.PI * 0
    let b = 0.2
    // setInterval(() => {
    //   r += Math.PI * 0.1
    //   this._bgCircle.setRotation(true, r)
    //   if (this._star.getContainer().alpha <= 0) {
    //     b=0.2
    //   } 
    //   if (this._star.getContainer().alpha >= 1) {
    //     b=-0.2
    //   }
    //   this._star.setAlpha(true, this._star.getContainer().alpha+=b)
    // }, 300)
  }

  // private rotateCircle() {
  //   let r = Math.PI * 0
  //   window.requestAnimationFrame(()=>{
  //     r += Math.PI * 0.1
  //     alert('?')
  //     this._bgCircle.setRotation(true, r)
  //   })
  // }

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