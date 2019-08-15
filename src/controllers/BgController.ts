import Bg from '@/components/elements/Bg'
import wrapper from '@/components/elements/WrapperContainer'

export default class BgController {
  private bg: Bg
  constructor(w: wrapper) {
    this.bg = new Bg()
    w.addContainer(this.bg.getContainer())
    this.bg.setSize(false, 1950, 900)
    this.bg.setPosition(false, -162.5, 0)
  }
}