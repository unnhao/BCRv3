import Wrapper from '@/components/elements/Wrapper'
import Sprite from '@/components/atoms/Sprite'
import WrapperContainer from '@/components/elements/WrapperContainer'
import chipType from '@/config/chipType'
import imagePath from '@/config/imagePath'

export default class Chip implements Wrapper{
  private _wrapper: Wrapper
  private _centerWrapper: Wrapper
  constructor (value:keyof typeof chipType) {
    this._wrapper = new WrapperContainer()
    this._centerWrapper = new WrapperContainer()
    let _sprite = new Sprite(imagePath.chipPath, chipType[value].type)
    // scale置中
    this._centerWrapper.addContainer(_sprite.getContainer())
    this._centerWrapper.getContainer().pivot.set(this._centerWrapper.width / 2, this._centerWrapper.height / 2)
    this._centerWrapper.setPosition(false, this._centerWrapper.width / 2, this._centerWrapper.height / 2)
    this._wrapper.addChild(this._centerWrapper)
  }
  setPosition(animation: boolean, x: number, y: number): void {
    this._wrapper.setPosition(animation, x, y)
  }
  setSize(animation: boolean, width: number, height: number): void {
    this._wrapper.setSize(animation, width, height)
  }
  addChild(child: Wrapper): void {
    this._wrapper.addChild(child)
  }
  addContainer(child: any): void {
    this._wrapper.addContainer(child)
  }
  getContainer(): PIXI.Container {
      return this._wrapper.getContainer()
  }
  setScale(animation: boolean, scale_x: number, scale_y: number): void {
      this._centerWrapper.setScale(animation, scale_x, scale_y)
  }
  setInteractive(interactive: boolean): void {
    this._wrapper.getContainer().buttonMode = true
    this._wrapper.setInteractive(interactive)
  }
  setRotation(animation: boolean, rotation: number): void {
    this._centerWrapper.setRotation(animation, rotation)
  }
  setAlpha(animation: boolean, alpha: number): void {
    this._wrapper.setAlpha(animation, alpha)
  }
  removeChildren(): void {
    this._wrapper.getContainer().removeChildren()
  }
  on(event: string, listener: any): void {
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