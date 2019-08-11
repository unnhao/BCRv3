import Wrapper from '@/components/elements/Wrapper'
import Sprite from '@/components/atoms/Sprite'
import WrapperContainer from '@/components/elements/WrapperContainer'
import pokerType from '@/config/pokerType'
import imagePath from '@/config/imagePath'

export default class Poker implements Wrapper{
  private _wrapper: Wrapper
  private _centerWrapper: Wrapper
  private _pokerType: string
  private _pokerColor: string
  private _pokerValue: string

    constructor(pokerConfig: keyof typeof pokerType, value: string) {
    this._pokerType = pokerType[pokerConfig].type
    this._pokerColor = pokerType[pokerConfig].color
    this._pokerValue = value

    this._wrapper = new WrapperContainer()
    this._centerWrapper = new WrapperContainer()
    let _sprite = new Sprite(imagePath.pokerPath, pokerType[pokerConfig].type)

    this._centerWrapper.addContainer(new Sprite(imagePath.pokerPath, 'front').getContainer())
    this.drawNumIcon()
    if (['J', 'Q', 'K'].includes(this._pokerValue)) { this.drawJQKIcon() }

    // scale置中
    this._centerWrapper.addContainer(_sprite.getContainer())
    this._centerWrapper.getContainer().pivot.set(this._centerWrapper.width / 2, this._centerWrapper.height / 2)
    this._centerWrapper.setPosition(false, this._centerWrapper.width / 2, this._centerWrapper.height / 2)
    this._wrapper.addChild(this._centerWrapper)
    
    // 繪製圖
  }
  private drawNumIcon(): void{
    let flowerBase = {
      x: 10,
      y: 40,
      scale: 0.6
    }

    let numBase = {
      x: 10,
      y: 10,
      scale: 0.6
    }
    // 正向圖案
    let flower = new WrapperContainer()
    flower.addContainer(new Sprite(imagePath.pokerPath, `${this._pokerColor}${this._pokerType}`).getContainer())
    flower.setScale(false, flowerBase.scale, flowerBase.scale)
    flower.setPosition(false, flowerBase.x, flowerBase.y)
    this._centerWrapper.addChild(flower)

    // 反向圖案
    let anti_flower = new WrapperContainer()
    anti_flower.addContainer(new Sprite(imagePath.pokerPath, `${this._pokerColor}${this._pokerType}`).getContainer())
    anti_flower.setScale(false, flowerBase.scale, flowerBase.scale)
    anti_flower.setRotation(false, Math.PI)
    anti_flower.setPosition(false, this._centerWrapper.width - flowerBase.x, this._centerWrapper.height - flowerBase.y)
    this._centerWrapper.addChild(anti_flower)

    // 正向數字
    let num = new WrapperContainer()
    num.addContainer(new Sprite(imagePath.pokerPath, `${this._pokerColor}${this._pokerValue}`).getContainer())
    num.setScale(false, numBase.scale, numBase.scale)
    num.setPosition(false, numBase.x, numBase.y)
    this._centerWrapper.addChild(num)

    // 反向數字
    let anti_num = new WrapperContainer()
    anti_num.addContainer(new Sprite(imagePath.pokerPath, `${this._pokerColor}${this._pokerValue}`).getContainer())
    anti_num.setScale(false, numBase.scale, numBase.scale)
    anti_num.setRotation(false, Math.PI)
    anti_num.setPosition(false, this._centerWrapper.width - numBase.x, this._centerWrapper.height - numBase.y)
    this._centerWrapper.addChild(anti_num)

  }

  private drawJQKIcon(): void{
    let iconBase = {
      x: 25,
      y: 18,
      scale: 0.8,
      padding: 8
    }
    // 圖案
    let icon = new WrapperContainer()
    icon.addContainer(new Sprite(imagePath.pokerPath, `${this._pokerColor}King`).getContainer())
    icon.setScale(false, iconBase.scale, iconBase.scale)
    icon.setPosition(false, iconBase.x, iconBase.y)
    let maskGraphic = new PIXI.Graphics()
    maskGraphic.beginFill(0xff0000)
    maskGraphic.drawRect(iconBase.padding, iconBase.padding, this._centerWrapper.width - iconBase.padding * 2, this._centerWrapper.height - iconBase.padding * 2)
    maskGraphic.endFill()
    icon.getContainer().mask = maskGraphic
    this._centerWrapper.addContainer(maskGraphic)
    this._centerWrapper.addChild(icon)
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