import {fetchQueryBase} from "./index";

// test05 new
let ogname = "patton-sr/oglockmainbsc"

if (true) {
    ogname = "patton-sr/ba5f"
}
export function getWithdrawRecords() {
    return fetchQueryBase(ogname, {
        text: `{
  withdrawRecords(first:1000,orderBy: blockTimestamp,orderDirection: desc){
    Contract_id
    user,
    amount
    blockTimestamp
  }
}`
    }, "")
}