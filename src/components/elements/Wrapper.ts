import * as PIXI from "pixi.js"

/**
 * 我自己的包裝用Container 不要直接調用原生addChild
 */
export default interface Wrapper {
  /**
   * 座標
   */
  x: number;
  y:number

  /**
   * 大小
   */
  width:number
  height:number

  /**
   * 
   * @param animation 動畫? 
   * @param x 位置
   * @param y 位置
   */
  setPosition(animation: boolean, x: number, y: number): void
  /**
   * 設定長寬
   * @param animation 動畫?
   * @param width 寬度
   * @param height 高度
   */
  setSize(animation: boolean, width: number, height: number): void

  /**
   * 添加Container到此Wrapper內
   * @param child 要添加的
   */
  addChild(child: Wrapper): void

  /**
   * 添加Container到此Wrapper內
   * @param child 要添加的
   */
  addContainer(child:any): void

  /**
   * 取得pixi container
   */
  getContainer(): PIXI.Container

  /**
   * scale
   */
  setScale(animation: boolean, scale_x: number,  scale_y: number): void

  /**
   * interactive
   */
  setInteractive(interactive: boolean): void

  /**
   * Rotation
   */
  setRotation(animation: boolean, rotation: number): void

  /**
   * Alpha
   */
  setAlpha(animation: boolean, alpha: number): void

  /**
   * interactive
   */
  removeChildren(): void

  /**
   * 監聽此Container
   * @param event 監聽
   * @param listener 事件
   */
  on(event: string, listener: any): void
}