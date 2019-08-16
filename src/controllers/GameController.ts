import BgController from '@/controllers/BgController'
import TableController from '@/controllers/TableController'
import ChipBoxController from '@/controllers/ChipBoxController'
import wrapper from '@/components/elements/WrapperContainer'
import mock from '@/mock/mock'

export default class GameController{
    private tableController: TableController
    private bgController: BgController
    private chipBoxController: ChipBoxController
    constructor(w: wrapper) {
        this.bgController = new BgController(w)
        this.tableController = new TableController(w)
        this.chipBoxController = new ChipBoxController(w)
        this.start()
    }

    public start() {
        mock.on('test', (e:any)=>{console.log(e + '123')})
        // setTimeout(()=>{
        //     mock.emit('test', '78', '45646', '幹')
        // }, 3000)
    }
}