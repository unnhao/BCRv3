import * as PIXI from "pixi.js"
export default class Animation {
  /**
   * _animatedele = 動畫物件
   * _container = 裝動畫物件
   */
  private _animatedel: PIXI.extras.AnimatedSprite
  private _container: PIXI.Container

  constructor(targetsheet: string, target: string) {
    let sheet: any = PIXI.loader.resources[targetsheet].spritesheet
    this._animatedel = new PIXI.extras.AnimatedSprite(sheet.animations[target])
    this._animatedel.animationSpeed = 0.25
    this._animatedel.loop = false
    this._container = new PIXI.Container()
    this._container.addChild(this._animatedel)
  }
  
  public play(): void{
    this._animatedel.play()
  }

  public stop(): void{
    this._animatedel.stop()
  }

  public getAnimatedSprite(): PIXI.extras.AnimatedSprite{
    return this._animatedel
  }

  public getContainer(): PIXI.Container{
    return this._container
  }
}