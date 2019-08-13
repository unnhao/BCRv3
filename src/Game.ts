import Loader from '@/loaders/Loader'
import { getRandom } from '@/utils/tools'
import imagePath from '@/config/imagePath'
import pokerType from '@/config/pokerType'

// test
import Bg from '@/components/elements/Bg'
import WrapperContainer from '@/components/elements/WrapperContainer'
import PokerPoint from './components/elements/PokerPoint';

export default class Game {
  constructor() {
    Loader.load(imagePath)
          .on((e:number)=>{console.log(`${e * 100}%`)})
          .then(this.setup)
  }

  private setup(): void {
    let app = new PIXI.Application({ width: 1625, height: 900 })
    document.body.appendChild(app.view)

    let i: Array<keyof typeof pokerType> = ["Heart", "Diamond", "Plum", "Spades"]
    let n = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

    let game = new WrapperContainer()
    let pp = new PokerPoint(7)
    let bg = new Bg()
    game.addChild(bg)
    app.stage.addChild(game.getContainer())
  }
}