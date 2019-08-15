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
import Poker from './components/elements/Poker'
import TableGroup from './components/groups/TableGroup'
import ChipGroup from './components/groups/ChipGroup'
import Bg from './components/elements/Bg'
import Chip from './components/elements/Chip'

export default class Game {
  constructor() {
    Loader.load(imagePath)
      .on((e: number) => { console.log(`${e * 100}%`) })
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
    let c: Array<keyof typeof chipType> = ['1000', '10000', '100000', '1000000', '10000000', '5000000']

    let chipsArray: any = []
    for (let i = 0; i < 100; i++) {
      let chip = new Chip(c[getRandom(0, 5)])
      chipsArray.push(chip)
      game.addChild(chip)
      chip.setPosition(true, 200 + getRandom(0, 300), 200 + getRandom(0, 200))
      chip.setScale(true, 0.75, 0.75)
    }

    // sort ---
    chipsArray.sort((a:Chip, b:Chip) => {
      return Number(b.getValue()) - Number(a.getValue())
    })

    let iwantnum = 0
    for (let i = 0; i < 15; i++) {
      iwantnum += Number(chipsArray[getRandom(0, chipsArray.length - 1)].getValue())
    }
    console.log(iwantnum)

    let getArr:any = []
    for(let i in chipsArray){
      console.log(`iwantnum: ${iwantnum} ->> chipsArray[${i}]: ${Number(chipsArray[i].getValue())}`)
      if (iwantnum >= Number(chipsArray[i].getValue())){
        iwantnum-= Number(chipsArray[i].getValue())
        getArr.push(chipsArray[i])
        chipsArray.splice(i, 1)
      }
    }
    let getNum = 0
    for(let i in getArr){
      getNum+= Number(getArr[i].getValue())
    }
    console.log(getNum)
    setTimeout(()=>{
      for(let i in getArr){
        getArr[i].setPosition(true, 800 +getRandom(0, 200), 500+getRandom(0, 200))
      }
    },2000)
    // console.log(iwantnum - getNum)
    


    // let res = 0
    // let sort = {}
    // for (let c in chipsArray) {

    //   console.log(chipsArray[c].getValue())
    //   res += Number(chipsArray[c].getValue())
    // }
    // console.log(res)

    // const gui = new dat.GUI()
    // gui.add(setting, 'message')
    // // gui.add(setting, 'speed', -5, 5);
    // // gui.add(setting, 'displayOutline');
    // gui.add(setting, 'ADDPoker')
    // gui.add(setting, 'DISPLAY_SCORE')
    // gui.add(setting, 'DISPLAY_WIN')

    // var list = {"you": 100, "me": 75, "foo": 116, "bar": 15};
    // keysSorted = Object.keys(list).sort(function(a,b){return list[a]-list[b]})
    // console.log(keysSorted);  

    app.stage.addChild(game.getContainer())
  }
}