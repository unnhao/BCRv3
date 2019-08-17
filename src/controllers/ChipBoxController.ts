import ChipGroup from '@/components/groups/ChipGroup'
import wrapper from '@/components/elements/WrapperContainer'
import Store from '@/controllers/Store'
import chipType from '@/config/chipType'
export default class ChipBoxController {
  private chipGroup: ChipGroup
  private stateChip: keyof typeof chipType

  constructor(w: wrapper) {
    this.chipGroup = new ChipGroup()
    this.stateChip = '1000'

    w.addContainer(this.chipGroup.getContainer())

    this.chipGroup.onStateChange((type: keyof typeof chipType)=>{
      Store.dispatch('UPDATE_CHIP_STATUS', type)
    })

    this.chipGroup.setPosition(false, 1625 / 2 - this.chipGroup.width / 2, 900 - this.chipGroup.height - 30)

    Store.subscript(this.updateState.bind(this))
    this.updateState()
  }

  public updateState() {
    this.stateChip = Store.getState().chipStatus
    this.chipGroup.updateState(this.stateChip)
  }
}