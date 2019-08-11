import * as PIXI from "pixi.js"
export default class Texture {
  private _container: PIXI.Container
  /**
   * @param targetPath 要產生甚麼圖
   */
  constructor(targetPath: string) {
    let sprite = new PIXI.Sprite(PIXI.utils.TextureCache[targetPath])
    this._container = new PIXI.Container()
    this._container.addChild(sprite)
  }

  public getContainer(): PIXI.Container{
    return this._container
  }
}