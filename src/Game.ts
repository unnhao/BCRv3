import Loader from '@/loaders/Loader'
import imagePath from '@/config/imagePath'
import WrapperContainer from '@/components/elements/WrapperContainer'
import GameController from '@/controllers/GameController'
import Store from '@/controllers/Store'
import '@/mock/dat'

export default class Game {
  constructor() {
    Loader.load(imagePath)
          .on((e:number)=>{console.log(`${e * 100}%`)})
          .then(this.setup)
  }

  private setup(): void {
    let app = new PIXI.Application({ width: 1625, height: 900 })
    document.body.appendChild(app.view)

    let game = new WrapperContainer()
    new GameController(game)
    
    Store.dispatch('UPDATE_MONEY_STATUS', 10000)
    app.stage.addChild(game.getContainer())
  }
}