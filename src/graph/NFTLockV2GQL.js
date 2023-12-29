import { fetchQueryBase } from "./index";

let pathname = "patton-sr/mainogbsc"

if (true) {
    pathname = "patton-sr/6afb"
}
export function getMiningRecord(account) {

    return fetchQueryBase(pathname, {
        text: `{
            lockRecords(where:{user_contains:"${account}" }){
                id
                user
                nft
                tokenId
                amount
                blockTimestamp
             }
        }`
    }, "")
}


export function getUnMiningRecord(account) {
 
    return fetchQueryBase(pathname, {
        text: `{
            unLockRecords(where:{user_contains:"${account}" } ){
                id
                user
                nft
                tokenId
                power
                blockTimestamp
             }
        }`
    }, "")
}
export function getWithdrawSrtRecord(pageSize, page,account) {

    return fetchQueryBase(pathname, {
        text: `{
            claimSrtRecords(first:${pageSize} skip:${pageSize * (page - 1)} where:{user_contains:"${account}" } ){
                user
                amount
                blockTimestamp
                 }
        }`
    }, "")
}

export function getAdminDepositRecord(pageSize, page) {
    return fetchQueryBase(pathname, {
        text: `{
            adminDeposits(first:${pageSize} skip:${pageSize * (page - 1)}){
                admin
                token
                amount
                blockTimestamp
                 }
        }`
    }, "")
}

export function getAdminWithdrawRecord(pageSize, page) {
    return fetchQueryBase(pathname, {
        text: `{
            adminWithdraws(first:${pageSize} skip:${pageSize * (page - 1)}){
                admin
                token
                amount
                blockTimestamp
                 }
        }`
    }, "")
}
