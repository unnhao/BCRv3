import Loader from '@/loaders/Loader'
import imagePath from '@/config/imagePath'
import pokerType from '@/config/pokerType'

import WrapperContainer from '@/components/elements/WrapperContainer'
import GameController from '@/controllers/GameController'

export default class Game {
  constructor() {
    Loader.load(imagePath)
          .on((e:number)=>{console.log(`${e * 100}%`)})
          .then(this.setup)
  }

  private setup(): void {
    let app = new PIXI.Application({ width: 1625, height: 900 })
    document.body.appendChild(app.view)

    // let i: Array<keyof typeof pokerType> = ["Heart", "Diamond", "Plum", "Spades"]
    // let n = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

    let game = new WrapperContainer()
    new GameController(game)
  
    // bg.setSize(false, 1950, 900)
    // bg.setPosition(false, -162.5, 0)


    app.stage.addChild(game.getContainer())
  }
}