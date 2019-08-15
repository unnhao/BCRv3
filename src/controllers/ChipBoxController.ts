import ChipGroup from '@/components/groups/ChipGroup'
import wrapper from '@/components/elements/WrapperContainer'

export default class ChipBoxController {
  private chipGroup: ChipGroup
  constructor(w: wrapper) {
    this.chipGroup = new ChipGroup()
    w.addContainer(this.chipGroup.getContainer())
    this.chipGroup.setPosition(false, 1625 / 2 - this.chipGroup.width / 2, 900 - this.chipGroup.height - 30)
  }
}