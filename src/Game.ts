import Loader from '@/loaders/Loader'
import { getRandom } from '@/utils/tools'
import imagePath from '@/config/imagePath'
import pokerType from '@/config/pokerType'

// test
// import Bg from '@/components/elements/Bg'
import WrapperContainer from '@/components/elements/WrapperContainer'
import PokerPoint from './components/elements/PokerPoint'
import PokerGroup from '@/components/groups/PokerGroup'
import PokerWin from '@/components/elements/PokerWin'
import dat from 'dat.gui'
import Poker from './components/elements/Poker';
import TableGroup from './components/groups/TableGroup';
import ChipGroup from './components/groups/ChipGroup';
import Bg from './components/elements/Bg';

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
    let bg = new Bg()
    let pp = new PokerPoint(7)
    let tableGroup = new TableGroup()
    tableGroup.setPosition(false, 0, 0)
    tableGroup.setSize(false, 1625, tableGroup.height)
    game.addChild(bg)
    
    bg.setSize(false, 1950, 900)
    bg.setPosition(false, -162.5, 0)

    let chipGroup = new ChipGroup()

    game.addChild(tableGroup)
    game.addChild(chipGroup)
    // tableGroup.setPosition(false, )
    // let pw = new PokerWin()
    // game.addChild(pw)
    // // dat gui
    // let setting = {
    //   message : 'dat.gui',
    //   speed : 0.8,
    //   displayOutline : false,
    //   ADDPoker : () => {
    //     pokerGroups.addpoker(new Poker(i[getRandom(0, 3)], n[getRandom(0, 12)], {x: 500, y:600, scale: 1, rotation: Math.PI * 2}))
    //   },
    //   DISPLAY_SCORE: () => {
    //     pokerGroups.displayPokerPoint()
    //   },
    //   DISPLAY_WIN: () => {
    //     pokerGroups.displayWin()
    //   }
    // }

    // const gui = new dat.GUI()
    // gui.add(setting, 'message')
    // // gui.add(setting, 'speed', -5, 5);
    // // gui.add(setting, 'displayOutline');
    // gui.add(setting, 'ADDPoker')
    // gui.add(setting, 'DISPLAY_SCORE')
    // gui.add(setting, 'DISPLAY_WIN')

    app.stage.addChild(game.getContainer())
  }
}