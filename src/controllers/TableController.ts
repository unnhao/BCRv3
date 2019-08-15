import TableGroup from '@/components/groups/TableGroup'
export default class TableController {
  private tableGroup: TableGroup
  constructor() {
    this.tableGroup = new TableGroup()
  }

  // 玩家下注
  public userPayout() {
  }

  // 其他人下注
  public strangerPayout() {

  }

  // 停止下注
  public stopPayout() {

  }

  // 開始下注
  public startPayout() {

  }

  // 退回所有Chips
  public reseTableChips() {

  }

  // 退回所有user Chips
  public resetUserChips() {

  }

  // 退回所以其他人的 Chips
  public resetStrangerChips() {

  }
}