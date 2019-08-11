/**
 * 亂數產生
 * @param min 最小值
 * @param max 最大值
 */
function getRandom(min:number, max:number):number {
    return Math.round(min + Math.random() * (max - min))
}

export {getRandom}
export default getRandom