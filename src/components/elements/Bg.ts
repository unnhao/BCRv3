import * as PIXI from "pixi.js"
import Texture from '@/components/atoms/Texture'
import WrapperContainer from '@/components/elements/WrapperContainer'
import Wrapper from '@/components/elements/Wrapper'
import imagePath from '@/config/imagePath'

export default class Bg implements Wrapper{
  private _wrapper: Wrapper
  private _centerWrapper: Wrapper
  constructor() {
    this._wrapper = new WrapperContainer()
    this._centerWrapper = new WrapperContainer()
    let _bg = new Texture(imagePath.bgPath)
    this._centerWrapper.addContainer(_bg.getContainer())
    this._centerWrapper.getContainer().pivot.set(this._centerWrapper.width/2, this._centerWrapper.height/2)
    this._centerWrapper.setPosition(false, this._centerWrapper.width/2, this._centerWrapper.height/2)
    this._wrapper.addChild(this._centerWrapper)
  }

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