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
        mock.on('test', (e:any)=>{console.log(e)})
        setTimeout(()=>{
            mock.emit('test', '78', '45646', '幹')
        }, 3000)
    }
    
    // 開始投注
    // 倒數30S
    // 下注下注

    // 時間到了
    // 停止投注
    // 倒數30S開牌
    // 發牌左
    // 發牌右
    // 發牌左
    // 發牌右
    // 確定是否要補牌
    // 決定輸贏
    // 刪除牌組
    // 公布區域勝負
    // 回收輸的籌碼
    // 檢查user本金以及贏了多少錢
    // 補籌碼至贏的區域
    // user贏: 9500
    // 移除所有區域的籌碼
    // 重置完成
    // 重新開始投注
}