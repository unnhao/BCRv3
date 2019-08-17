import BgController from '@/controllers/BgController'
import TableController from '@/controllers/TableController'
import ChipBoxController from '@/controllers/ChipBoxController'
import InterFaceController from '@/controllers/InterFaceController'
import PokerController from '@/controllers/PokerController'
import wrapper from '@/components/elements/WrapperContainer'
import mock from '@/mock/mock'
import Store from '@/controllers/Store'

export default class GameController{
    private tableController: TableController
    private pokerController: PokerController
    private bgController: BgController
    private chipBoxController: ChipBoxController
    private interFaceController: InterFaceController
    constructor(w: wrapper) {
        this.bgController = new BgController(w)
        this.tableController = new TableController(w)
        this.chipBoxController = new ChipBoxController(w)
        this.interFaceController = new InterFaceController(w)
        this.pokerController = new PokerController(w)
        this.start()

        mock.on('MSG_USER_MONEY', (e:any) => {
            Store.dispatch('UPDATE_MONEY_STATUS', e.money)
        })
    }

    public start() {
        mock.on('test', (e:any)=>{console.log(e + '123')})
        // setTimeout(()=>{
        //     mock.emit('test', '78', '45646', '幹')
        // }, 3000)
    }
}