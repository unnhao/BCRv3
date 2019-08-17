import mock from '@/mock/mock'
import {getRandom} from '@/utils/tools'
import dat from 'dat.gui'

import '@/core/core'

mock.on('USER_BET_PAYOUT', (c:any)=> {
    console.log(c)
    mock.emit('MSG_USER_BET_PAYOUT', c)
    // mock.emit('')
})
/**
 * 開始投注 BCR_START_BET
 * 停止投注 BCR_STOP_BET
 * 計時器計時 BCR_COUNTDOWN_TIME_STATE
 * 計時器狀態下注中/開牌中 BCR_COUNTDOWN_BET_STATE
 * 發閒 BCR_FA_POKER_PLAYER 給牌的設定
 * 發莊 BCR_FA_POKER_BANKER 給牌的設定
 */
// MSG_USER_BET_PAYOUT
// mock.on('USER_BET_PAYOUT', (e:any) => {
//     // mock.emit('MSG_USER_BET_PAYOUT', e)
// })
// setInterval(()=>{
//     // mock.emit('test', 'core')
//     mock.emit('MSG_USER_MONEY', {
//         money: getRandom(1, 900) * 1000
//     })
// }, 3000)




// 
let setting = {
pokerMessage: 'poker',
ADD_POKER_PLAYER: () => {
    mock.emit('ADD_POKER_PLAYER', 'Diamond', 'A')
},
ADD_POKER_BANKER: () => {
    mock.emit('ADD_POKER_BANKER', 'Diamond', 'A')
},
SET_POKER_PLAYER_POINT: () => {
    mock.emit('SET_POKER_PLAYER_POINT', 9)
},
SET_POKER_BANKER_POINT: () => {
    mock.emit('SET_POKER_BANKER_POINT', 9)
},
SET_POKER_PLAYER_WIN: () => {
    mock.emit('SET_POKER_PLAYER_WIN')
},
SET_POKER_BANKER_WIN: () => {
    mock.emit('SET_POKER_BANKER_WIN')
},
RESET_POKER: () => {
    mock.emit('RESET_POKER')
},
countdownMessage: 'countdown',
SET_COUNTDOWN_TIME: () => {
    mock.emit('SET_COUNTDOWN_TIME', 30)
},
SET_COUNTDOWN_START: () => {
    mock.emit('SET_COUNTDOWN_START')
},
SET_COUNTDOWN_STOP: () => {
    mock.emit('SET_COUNTDOWN_STOP')
},
SET_COUNTDOWN_STATUS_PAYING: () => {
    mock.emit('SET_COUNTDOWN_STATUS', 'Paying')
},
SET_COUNTDOWN_STATUS_BETING: () => {
    mock.emit('SET_COUNTDOWN_STATUS', 'Beting')
}
}
const gui = new dat.GUI()
gui.add(setting, 'pokerMessage')
gui.add(setting, 'ADD_POKER_PLAYER')
gui.add(setting, 'ADD_POKER_BANKER')
gui.add(setting, 'SET_POKER_PLAYER_POINT')
gui.add(setting, 'SET_POKER_BANKER_POINT')
gui.add(setting, 'SET_POKER_PLAYER_WIN')
gui.add(setting, 'SET_POKER_BANKER_WIN')
gui.add(setting, 'RESET_POKER')
gui.add(setting, 'countdownMessage')
gui.add(setting, 'SET_COUNTDOWN_TIME')
gui.add(setting, 'SET_COUNTDOWN_START')
gui.add(setting, 'SET_COUNTDOWN_STOP')
gui.add(setting, 'SET_COUNTDOWN_STATUS_PAYING')
gui.add(setting, 'SET_COUNTDOWN_STATUS_BETING')



// mock.on('SET_COUNTDOWN_TIME', (t: number)=> {
//     this.tableGroup.setCountdownTime(t)
//   })

//   mock.on('SET_COUNTDOWN_START', ()=> {
//     this.tableGroup.setCountdownStart()
//   })

//   mock.on('SET_COUNTDOWN_STOP', ()=> {
//     this.tableGroup.setCountdownStop()
//   })

//   mock.on('SET_COUNTDOWN_STATUS', (s: string)=> {
//     this.tableGroup.setCountdownStatus(s)
//   })
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