import pokerType from '@/config/pokerType'
import mock from '@/mock/mock'
import {getRandom} from '@/utils/tools'
import { setInterval } from 'timers';

let i: Array<keyof typeof pokerType> = ["Heart", "Diamond", "Plum", "Spades"]
let n = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

let status = 'Beting'
let pokerCount = 3
let duringTime = 30

let pokerProcess = async () => {
  let pokerStatus = 'player'
  let pokerFa = () => {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        if (pokerStatus === 'banker') {
          mock.emit('ADD_POKER_BANKER', i[getRandom(0, 3)], n[getRandom(0,12)])
          pokerStatus = 'player'
          resolve()
          return
        }
        if (pokerStatus === 'player') {
          mock.emit('ADD_POKER_PLAYER', i[getRandom(0, 3)], n[getRandom(0,12)])
          pokerStatus = 'banker'
          resolve()
          return
        }
        
      }, 1000)
    })
  }
  for (let i =0; i< pokerCount*2;i++) {
    await pokerFa()
  }
}

let game = () => {
  if (status === 'Beting') {
    mock.emit('RESET_POKER')
    mock.emit('SET_COUNTDOWN_TIME', 10)
    mock.emit('SET_COUNTDOWN_START')
    mock.emit('SET_COUNTDOWN_STATUS', 'Beting')
    status = 'Paying'
    return 
  }
  if (status === 'Paying') {
    mock.emit('SET_COUNTDOWN_TIME', 10)
    mock.emit('SET_COUNTDOWN_START')
    mock.emit('SET_COUNTDOWN_STATUS', 'Paying')
    status = 'Beting'
    pokerProcess()
    return
  }
}


// let init = () => {
//   status = 'Beting'
//   mock.emit('SET_COUNTDOWN_TIME', 30)
//   mock.emit('SET_COUNTDOWN_START')
//   mock.emit('SET_COUNTDOWN_STATUS', 'Beting')
// }
// init()
let start = () => {
  setTimeout(()=>{
    game()
    setInterval(()=>{
      game()
    },10000)
  },1000)
}

start()