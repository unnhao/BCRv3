import BgController from '@/controllers/BgController'
import TableController from '@/controllers/TableController'
import ChipBoxController from '@/controllers/ChipBoxController'
import wrapper from '@/components/elements/WrapperContainer'

export default class GameController{
    private tableController: TableController
    private bgController: BgController
    private chipBoxController: ChipBoxController
    constructor(w: wrapper) {
        this.bgController = new BgController(w)
        this.tableController = new TableController(w)
        this.chipBoxController = new ChipBoxController(w)
    }
}