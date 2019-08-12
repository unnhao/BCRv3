import Wrapper from '@/components/elements/Wrapper'
import Sprite from '@/components/atoms/Sprite'
import WrapperContainer from '@/components/elements/WrapperContainer'
import pokerType from '@/config/pokerType'
import imagePath from '@/config/imagePath'

export default class Poker implements Wrapper {
  /**
   * Poker
   * 因應旋轉置中需增加一層_centerWrapper置中
   * _centerWrapperFront是牌面
   * _centerWrapperBack是背面
   * 此兩container也需要置中
   */
  private _wrapper: Wrapper
  private _centerWrapper: Wrapper
  private _centerWrapperFront: Wrapper
  private _centerWrapperBack: Wrapper
  private _pokerType: string
  private _pokerColor: string
  private _pokerValue: string
  private _status: boolean = false

  constructor(pokerConfig: keyof typeof pokerType, value: string) {
    this._pokerType = pokerType[pokerConfig].type
    this._pokerColor = pokerType[pokerConfig].color
    this._pokerValue = value

    this._wrapper = new WrapperContainer()
    this._centerWrapper = new WrapperContainer()
    this._centerWrapperFront = new WrapperContainer()
    let _sprite = new Sprite(imagePath.pokerPath, pokerType[pokerConfig].type)

    this._centerWrapperFront.addContainer(new Sprite(imagePath.pokerPath, 'front').getContainer())

    this.drawNumIcon()
    if (['J', 'Q', 'K'].includes(this._pokerValue)) { this.drawJQKIcon() }

    this._centerWrapperFront.addContainer(_sprite.getContainer())
    this._centerWrapperFront.getContainer().pivot.set(this._centerWrapperFront.width / 2, this._centerWrapperFront.height / 2)
    this._centerWrapperFront.setPosition(false, this._centerWrapperFront.width / 2, this._centerWrapperFront.height / 2)
    this._centerWrapperFront.setScale(false, 0, 1)

    this._centerWrapperBack = new WrapperContainer()
    this._centerWrapperBack.addContainer(new Sprite(imagePath.pokerPath, 'back').getContainer())
    this._centerWrapperBack.getContainer().pivot.set(this._centerWrapperBack.width / 2, this._centerWrapperBack.height / 2)
    this._centerWrapperBack.setPosition(false, this._centerWrapperBack.width / 2, this._centerWrapperBack.height / 2)
    this._centerWrapperBack.setScale(false, 1, 1)

    this._centerWrapper.addChild(this._centerWrapperFront)
    this._centerWrapper.addChild(this._centerWrapperBack)

    this._centerWrapper.getContainer().pivot.set(this._centerWrapper.width / 2, this._centerWrapper.height / 2)
    this._centerWrapper.setPosition(false, this._centerWrapper.width / 2, this._centerWrapper.height / 2)

    this._wrapper.addChild(this._centerWrapper)
  }
  // 繪製圖
  private drawNumIcon(): void {
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
    this._centerWrapperFront.addChild(flower)

    // 反向圖案
    let anti_flower = new WrapperContainer()
    anti_flower.addContainer(new Sprite(imagePath.pokerPath, `${this._pokerColor}${this._pokerType}`).getContainer())
    anti_flower.setScale(false, flowerBase.scale, flowerBase.scale)
    anti_flower.setRotation(false, Math.PI)
    anti_flower.setPosition(false, this._centerWrapperFront.width - flowerBase.x, this._centerWrapperFront.height - flowerBase.y)
    this._centerWrapperFront.addChild(anti_flower)

    // 正向數字
    let num = new WrapperContainer()
    num.addContainer(new Sprite(imagePath.pokerPath, `${this._pokerColor}${this._pokerValue}`).getContainer())
    num.setScale(false, numBase.scale, numBase.scale)
    num.setPosition(false, numBase.x, numBase.y)
    this._centerWrapperFront.addChild(num)

    // 反向數字
    let anti_num = new WrapperContainer()
    anti_num.addContainer(new Sprite(imagePath.pokerPath, `${this._pokerColor}${this._pokerValue}`).getContainer())
    anti_num.setScale(false, numBase.scale, numBase.scale)
    anti_num.setRotation(false, Math.PI)
    anti_num.setPosition(false, this._centerWrapperFront.width - numBase.x, this._centerWrapperFront.height - numBase.y)
    this._centerWrapperFront.addChild(anti_num)
  }

  private drawJQKIcon(): void {
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
  // =====
  public filpPoker(): void {
    this._status = !this._status
    if (this._status) {
      console.log('true')
      setTimeout(()=>{
        this._centerWrapperFront.setScale(true, 1, 1)
      }, 350)
      this._centerWrapperBack.setScale(true, 0, 1)
    } else {
      console.log('false')
      setTimeout(()=>{
        this._centerWrapperBack.setScale(true, 1, 1)
      }, 350)
      this._centerWrapperFront.setScale(true, 0, 1)
    }
  }

  // =====
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