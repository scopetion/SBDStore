import BigNumber from "bignumber.js";

export function showNumber(value,decimals) {
    if (!value) {
        return 0
    }
    if (value == NaN) {
        return 0
    }
    if(!decimals && decimals != 0){
         decimals=2
    }
    if(decimals == 0){
        return BigNumber(value.toString()).toFixed(0)
    }                
    
    if (decimals < 3) {
        return value ? BigNumber((BigNumber(value).toFixed(decimals,BigNumber.ROUND_CEIL))).toLocaleString() : 0
    }
    if (value) {
        return value ? BigNumber((BigNumber(value).toFixed(decimals,BigNumber.ROUND_CEIL))).toString() : 0
    }
    return 0

}