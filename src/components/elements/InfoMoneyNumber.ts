import * as PIXI from "pixi.js"
import Sprite from '@/components/atoms/Sprite'
import WrapperContainer from '@/components/elements/WrapperContainer'
import Wrapper from '@/components/elements/Wrapper'
import imagePath from '@/config/imagePath'
import {toCurrency} from '@/utils/tools'

export default class InfoMoneyNumber implements Wrapper {
  private _wrapper: Wrapper
  private _number: number
  constructor(number: number) {
    this._wrapper = new WrapperContainer()
    this._number = number
    this.updateNumber(number)
  }

  public updateNumber(number: number) {
    let interval = setInterval(()=>{
      if (number === this._number){ clearInterval(interval) }
      if (number > this._number) {
        let _distance = number - this._number
        let _new_number = this._number += Math.ceil(_distance / 2)
        this.displayNumber(_new_number)
      } else {
        let _distance = this._number - number
        let _new_number = this._number -= Math.ceil(_distance / 2)
        this.displayNumber(_new_number)
      }
      if (Math.abs(number - this._number) < 1000) {
        this._number === number
        this.displayNumber(number)
        clearInterval(interval)
      }
    }, 100)
  }

  private displayNumber(number: number) {
    this._wrapper.removeChildren()
    let numberList = toCurrency(number).toString().split('')
    numberList.map((num: string, i:number)  => {
      let _sprite
      switch (num) {
        case '.':
          _sprite = new Sprite(imagePath.interfacePath, `dot`)
          break
        case ',':
          _sprite = new Sprite(imagePath.interfacePath, `comma`)
          _sprite.getContainer().y = 14
          break
        case '/':
          _sprite = new Sprite(imagePath.interfacePath, `slash`)
          break
        default:
          _sprite = new Sprite(imagePath.interfacePath, `money${num}`)
          break
      }
      let _wrc = new WrapperContainer()
      _wrc.addContainer(_sprite.getContainer())
      _wrc.setPosition(false, i * 16, 0)
      this._wrapper.addContainer(_wrc.getContainer())
    })
  }

  // ======
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