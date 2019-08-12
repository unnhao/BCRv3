import * as PIXI from "pixi.js"
import Sprite from '@/components/atoms/Sprite'
import WrapperContainer from '@/components/elements/WrapperContainer'
import Wrapper from '@/components/elements/Wrapper'
import CountdownNumber from '@/components/elements/CountdownNumber'
import imagePath from '@/config/imagePath'

export default class Countdown implements Wrapper {
  private _wrapper: Wrapper
  private _hoveArea: PIXI.Graphics
  private _type: string

  constructor(type: string) {
    this._wrapper = new WrapperContainer()
    this._hoveArea = new PIXI.Graphics()
    this._type = type
    let _hoverType = new Sprite(imagePath.tablePath, this._type)
    this._wrapper.addContainer(_hoverType.getContainer())
    this._wrapper.addContainer(this._hoveArea)
    this.drawHover()
    this.setInteractive(true)
  }

  private drawHover() {
    switch (this._type) {
      case 'playerpair':
        this.drawPlayerpair(this._hoveArea, 0, 0)
        break
      case 'player':
        this.drawPlayer(this._hoveArea, 0, 0)
        break
      case 'playerking':
        this.drawPlayerking(this._hoveArea, 0, 0)
        break
      case 'tiepair':
        this.drawTiepair(this._hoveArea, 0, 0)
        break
      case 'tie':
        this.drawTie(this._hoveArea, 0, 0)
        break
      case 'bankerking':
        this.drawBankerking(this._hoveArea, 0, 0)
        break
      case 'banker':
        this.drawBanker(this._hoveArea, 0, 0)
        break
      case 'bankerpair':
        this.drawBankerpair(this._hoveArea, 0, 0)
        break
      default:
        break
    }
  }
  // 繪製hover區域

  private drawPlayerpair(graph: PIXI.Graphics, xoff: number, yoff: number) { // 閒對子
    // graph.clear()
    graph.beginFill(0)
    graph.alpha = 0
    graph.moveTo(291 + xoff, 12 + yoff)
    graph.bezierCurveTo(279 + xoff, 4 + yoff, 429 + xoff, 107 + yoff, 417 + xoff, 99 + yoff)
    graph.bezierCurveTo(404 + xoff, 91 + yoff, 345 + xoff, 117 + yoff, 327 + xoff, 158 + yoff)
    graph.bezierCurveTo(313 + xoff, 162 + yoff, 66 + xoff, 132 + yoff, 3 + xoff, 133 + yoff)
    graph.bezierCurveTo(-11 + xoff, 139 + yoff, 137 + xoff, 11 + yoff, 289 + xoff, 13 + yoff)
    graph.endFill()
  }

  private drawPlayer(graph: PIXI.Graphics, xoff: number, yoff: number) { // 閒
    graph.beginFill(0)
    graph.alpha = 0
    graph.moveTo(73 + xoff, 9 + yoff);
    graph.bezierCurveTo(58 + xoff, 8 + yoff, 395 + xoff, 28 + yoff, 396 + xoff, 32 + yoff);
    graph.bezierCurveTo(396 + xoff, 32 + yoff, 356 + xoff, 118 + yoff, 448 + xoff, 155 + yoff);
    graph.bezierCurveTo(450 + xoff, 156 + yoff, 219 + xoff, 306 + yoff, 215 + xoff, 308 + yoff);
    graph.bezierCurveTo(202 + xoff, 315 + yoff, 36 + xoff, 316 + yoff, 7 + xoff, 208 + yoff);
    graph.bezierCurveTo(3 + xoff, 194 + yoff, -8 + xoff, 69 + yoff, 72 + xoff, 9 + yoff);
    graph.beginFill(0)
  }

  private drawPlayerking(graph: PIXI.Graphics, xoff: number, yoff: number) { // 閒王
    graph.beginFill(0)
    graph.alpha = 0
    graph.moveTo(289 + xoff, 153 + yoff)
    graph.bezierCurveTo(284 + xoff, 167 + yoff, 347 + xoff, -12 + yoff, 342 + xoff, 2 + yoff)
    graph.bezierCurveTo(327 + xoff, 2 + yoff, 234 + xoff, 2 + yoff, 232 + xoff, 0 + yoff)
    graph.bezierCurveTo(232 + xoff, 1 + yoff, 157 + xoff, 49 + yoff, 4 + xoff, 154 + yoff)
    graph.bezierCurveTo(-11 + xoff, 158 + yoff, 304 + xoff, 152 + yoff, 289 + xoff, 156 + yoff)
    graph.beginFill(0)
  }

  private drawTiepair(graph: PIXI.Graphics, xoff: number, yoff: number) { // 平對
    graph.beginFill(0)
    graph.alpha = 0
    graph.moveTo(60 + xoff, 6 + yoff);
    graph.bezierCurveTo(45 + xoff, 6 + yoff, 154 + xoff, 7 + yoff, 139 + xoff, 7 + yoff)
    graph.bezierCurveTo(134 + xoff, -7 + yoff, 199 + xoff, 172 + yoff, 194 + xoff, 158 + yoff)
    graph.bezierCurveTo(179 + xoff, 158 + yoff, 19 + xoff, 158 + yoff, 4 + xoff, 158 + yoff)
    graph.bezierCurveTo(-1 + xoff, 172 + yoff, 64 + xoff, -7 + yoff, 59 + xoff, 7 + yoff)
    graph.beginFill(0)
  }

  private drawTie(graph: PIXI.Graphics, xoff: number, yoff: number) { // 平對
    graph.beginFill(0)
    graph.alpha = 0
    graph.moveTo(101 + xoff, 4 + yoff)
    graph.bezierCurveTo(86 + xoff, 4 + yoff, 321 + xoff, -1 + yoff, 355 + xoff, 5 + yoff)
    graph.bezierCurveTo(384 + xoff, 11 + yoff, 437 + xoff, 37 + yoff, 441 + xoff, 95 + yoff)
    graph.bezierCurveTo(441 + xoff, 157 + yoff, 390 + xoff, 191 + yoff, 345 + xoff, 187 + yoff)
    graph.bezierCurveTo(330 + xoff, 187 + yoff, 99 + xoff, 186 + yoff, 84 + xoff, 186 + yoff)
    graph.bezierCurveTo(27 + xoff, 187 + yoff, -3 + xoff, 119 + yoff, 1 + xoff, 106 + yoff)
    graph.bezierCurveTo(-6 + xoff, 99 + yoff, 21 + xoff, 7 + yoff, 101 + xoff, 3 + yoff)
    graph.beginFill(0)
  }

  private drawBankerking(graph: PIXI.Graphics, xoff: number, yoff: number) { // 莊王
    graph.beginFill(0)
    graph.alpha = 0
    graph.moveTo(5 + xoff, 6 + yoff)
    graph.bezierCurveTo(-10 + xoff, 6 + yoff, 131 + xoff, 4 + yoff, 116 + xoff, 4 + yoff)
    graph.bezierCurveTo(104 + xoff, -4 + yoff, 355 + xoff, 163 + yoff, 343 + xoff, 155 + yoff)
    graph.bezierCurveTo(328 + xoff, 155 + yoff, 74 + xoff, 157 + yoff, 59 + xoff, 157 + yoff)
    graph.bezierCurveTo(53 + xoff, 149 + yoff, 7 + xoff, 15 + yoff, 5 + xoff, 8 + yoff)
    graph.beginFill(0)
  }

  private drawBanker(graph: PIXI.Graphics, xoff: number, yoff: number) { // 莊
    graph.beginFill(0)
    graph.alpha = 0
    graph.moveTo(54 + xoff, 25 + yoff)
    graph.bezierCurveTo(48 + xoff, 11 + yoff, 89 + xoff, 111 + yoff, 5 + xoff, 148 + yoff)
    graph.bezierCurveTo(-7 + xoff, 140 + yoff, 239 + xoff, 304 + yoff, 236 + xoff, 300 + yoff)
    graph.bezierCurveTo(220 + xoff, 298 + yoff, 401 + xoff, 339 + yoff, 447 + xoff, 176 + yoff)
    graph.bezierCurveTo(441 + xoff, 190 + yoff, 460 + xoff, 69 + yoff, 376 + xoff, 3 + yoff)
    graph.bezierCurveTo(361 + xoff, 2 + yoff, 71 + xoff, 23 + yoff, 54 + xoff, 25 + yoff)
    graph.beginFill(0)
  }

  private drawBankerpair(graph: PIXI.Graphics, xoff: number, yoff: number) { // 莊對
    graph.beginFill(0)
    graph.alpha = 0
    graph.moveTo(7 + xoff, 87 + yoff)
    graph.bezierCurveTo(-6 + xoff, 95 + yoff, 143 + xoff, 0 + yoff, 133 + xoff, 1 + yoff)
    graph.bezierCurveTo(134 + xoff, 2 + yoff, 288 + xoff, 13 + yoff, 420 + xoff, 123 + yoff)
    graph.bezierCurveTo(405 + xoff, 122 + yoff, 110 + xoff, 146 + yoff, 95 + xoff, 145 + yoff)
    graph.bezierCurveTo(61 + xoff, 103 + yoff, 32 + xoff, 91 + yoff, 7 + xoff, 89 + yoff)
    graph.beginFill(0)
  }

  // =====
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
    this._hoveArea.interactive = interactive
    this._hoveArea.buttonMode = interactive
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
    this._hoveArea.on(event, listener)
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