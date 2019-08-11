import * as PIXI from "pixi.js"
export default class Sprite {
  private _container: PIXI.Container
  /**
   * @targetsheet target位於哪張sprite
   * @param target 要產生甚麼圖
   */
  constructor(targetsheet: string, target: string) {
    let id: any = PIXI.loader.resources[targetsheet].textures
    let sprite = new PIXI.Sprite(id[`${target}.png`])
    this._container = new PIXI.Container()
    this._container.addChild(sprite)
  }

  public getContainer(): PIXI.Container{
    return this._container
  }
}