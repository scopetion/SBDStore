import {fetchQueryBase} from "./index";



// test06
// let sptUrl = "patton-sr/5f7d"
//test06
// let bonus = "patton-sr/e9196"
// test08
let bonus = "patton-sr/f03287"

let sptUrl = "patton-sr/fb76"

export function getBonusRecords(page, pageSize) {
    return fetchQueryBase(bonus, {
        text: `{
           bonusRecords(first: 1000) {
            operate
            _to
            _amount
            _threshold
            period
            bonusAmount
            blockTimestamp
            transactionHash
          }
        }`
    }, "")
}

export function getRecords(page, pageSize) {
    return fetchQueryBase(sptUrl, {
        text: `{
           records(first:1000 where:{DividendV2Id:0}){
            user
            amount
            blockTime
          }
        }`
    }, "")
}
