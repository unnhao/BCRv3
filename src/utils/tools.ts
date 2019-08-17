/**
 * 亂數產生
 * @param min 最小值
 * @param max 最大值
 */
function getRandom(min:number, max:number):number {
    return Math.round(min + Math.random() * (max - min))
}

/**
 * 轉換千分為
 * @param num 數字
 */
function toCurrency(num:number){
    var parts = num.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
}
export {getRandom, toCurrency}