import wrapper from '@/components/elements/WrapperContainer'
import InterFaceGroup from '@/components/groups/InterFaceGroup'
import Store from '@/controllers/Store'
import mock from '@/mock/mock'
import dat from 'dat.gui'

export default class InterFaceController {
  private interFaceGroup: InterFaceGroup
  private stateMoney: Number
  constructor(w: wrapper) {
    this.interFaceGroup = new InterFaceGroup()
    this.stateMoney = Store.getState().money
    w.addChild(this.interFaceGroup)
    Store.subscript(this.updateState.bind(this))

    // 
    let setting = {
      displayStartNotify: () => {
        this.interFaceGroup.startBetNotify()
      },
      displayEndNotify: () => {
        this.interFaceGroup.endBetNotify()
      },
    }
    const gui = new dat.GUI()
    gui.add(setting, 'displayStartNotify')
    gui.add(setting, 'displayEndNotify')
  }

  public updateState() {
    this.stateMoney = Store.getState().money
    this.interFaceGroup.updateMoney(Number(this.stateMoney))
  }
}