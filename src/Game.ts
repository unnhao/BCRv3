import Loader from '@/loaders/Loader'
import {getRandom} from '@/utils/tools'
import imagePath from '@/config/imagePath'
import pokerType from '@/config/pokerType'

// test
import Poker from '@/components/elements/Poker'
import WrapperContainer from '@/components/elements/WrapperContainer'

export default class Game {
    constructor () {
        Loader.load(imagePath).then(this.setup)
    }

    private setup (): void {
        let app = new PIXI.Application({ width: 1625, height: 900 })
        document.body.appendChild(app.view)

        let i:Array<keyof typeof pokerType> = ["Heart", "Diamond", "Plum", "Spades"]
        let n = ['A', '2', '3', '4','5','6','7','8','9','10','J','Q','K']

        let game = new WrapperContainer()
        setInterval(()=>{
            let p = new Poker(i[getRandom(0,3)], n[getRandom(0,12)])
            p.setPosition(true, getRandom(0, app.view.width), getRandom(0, app.view.height))
            p.setRotation(true, Math.PI * getRandom(0, 2))
            game.addChild(p)
        }, 200)
        
        app.stage.addChild(game.getContainer())
        
    }
}