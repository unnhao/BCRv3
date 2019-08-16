import mock from '@/mock/mock'
/**
 * 開始投注 BCR_START_BET
 * 停止投注 BCR_STOP_BET
 * 計時器計時 BCR_COUNTDOWN_TIME_STATE
 * 計時器狀態下注中/開牌中 BCR_COUNTDOWN_BET_STATE
 * 發閒 BCR_FA_POKER_PLAYER 給牌的設定
 * 發莊 BCR_FA_POKER_BANKER 給牌的設定
 */
mock.on('USER_BET', () => {

})
setTimeout(()=>{
    mock.emit('test', 'core')
}, 3000)



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