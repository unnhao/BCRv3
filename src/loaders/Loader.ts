import * as PIXI from "pixi.js"
/**
 * Loader 把設定檔的srcs傳進來自動全部load
 */
class Loader {
  public load(srcs: any) {
    return new Promise(async (resolve, reject) => {
      try {
        let res = []
        for (let i in srcs) { res.push(await this.loaderAdd(srcs[i])) }
        resolve(res)
      } catch (err) {
        reject(err)
      }
    })
  }

  private loaderAdd(path: string) {
    return new Promise((resolve, reject) => {
      PIXI.loader
        .add(path)
        .load(resolve)
        .onError.add(reject)
    })
  }
}

export default new Loader()