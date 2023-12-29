import {fetchQueryBase} from "./index";



// test06
// let sptUrl = "patton-sr/5f7d"
//
// let bonus = "patton-sr/610d"


// test08

let sptUrl = "patton-sr/fb76"
let bonus = "patton-sr/4ee0"

if (true) {
}

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
   records(first:1000  where:{DividendV2Id:2}){
            user
            amount
            blockTime
          }
        }`
    }, "")
}
