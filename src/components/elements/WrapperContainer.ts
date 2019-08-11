import * as PIXI from "pixi.js"
import Wrapper from '@/components/elements/Wrapper'
import { TweenMax } from "gsap"

/**
 * 我自己的包裝用Container 不要直接調用原生addChild
 */
export default class WrapperContainer implements Wrapper{
  private _container: PIXI.Container
  
  constructor(obj?: Wrapper) {
    this._container = new PIXI.Container()
    obj ? this.addChild(obj) : null
  }

  public setPosition(animation: boolean, x: number, y: number) {
    if (animation) {
      TweenMax.to(this._container, 0.6, {
        x: x,
        y: y
      });
    } else {
      this._container.x = x
      this._container.y = y
    }
  }
  /**
   * 設定長寬
   * @param width 寬度
   * @param height 高度
   */
  public setSize(animation: boolean, width: number, height: number) {
    if (animation) {
      TweenMax.to(this._container, 0.6, { width: width, height: height });
    } else {
      this._container.width = width
      this._container.height = height
    }
  }

  /**
   * 添加Container到此Wrapper內
   * @param child 要添加的
   */
  public addChild(child: Wrapper) {
    this._container.addChild(child.getContainer())
    return this
  }

  /**
   * 添加Container到此Wrapper內
   * @param child 要添加的
   */
  public addContainer(obj:any) {
    this._container.addChild(obj)
    return this
  }

  /**
   * 取得pixi container
   */
  public getContainer(): PIXI.Container {
    return this._container
  }


  /**
   * scale
   */
  public setScale(animation: boolean, scale_x: number, scale_y: number) {
    if (animation) {
      TweenMax.to(this._container.scale, 0.6, { x: scale_x, y: scale_y });
    } else {
      this._container.scale.x = scale_x
      this._container.scale.y = scale_y
    }
  }
  /**
   * 是否要可以感應
   * @param interactive 布林值開關
   */
  public setInteractive(interactive: boolean): void{
    this._container.interactive = interactive
  }

  /**
   * 旋轉
   * @param animation 
   * @param rotation 
   */
  public setRotation(animation: boolean, rotation: number): void {
    if (animation) {
      TweenMax.to(this._container, 0.6, { rotation: rotation });
    } else {
      this._container.rotation = rotation
    }
  }

  /**
   * setAlpha
   * @param animation 
   * @param alpha 
   */
  public setAlpha(animation: boolean, alpha: number) {
    if (animation) {
      TweenMax.to(this._container, 0.6, {
        alpha: alpha
      })
    } else {
      this._container.alpha = alpha
    }
  }

  /**
   * 移除所有子object
   */
  public removeChildren(): void {
    this._container.removeChildren()
  }

  /**
   * 監聽此Container
   * @param event 監聽
   * @param listener 事件
   */
  public on(event: string, listener: any) {
    this._container.on(event, listener)
  }

  get x(): number {
    return this._container.x;
  }
  set x(num:number) {
    this._container.x = num
  }

  get y(): number {
    return this._container.y;
  }
  set y(num:number) {
    this._container.y = num
  }

  get width(): number {
    return this._container.width;
  }
  set width(num:number) {
    this._container.width = num
  }
  get height(): number {
    return this._container.height;
  }
  set height(num:number) {
    this._container.height = num
  }
}