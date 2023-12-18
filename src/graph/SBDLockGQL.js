import { fetchQueryBase } from "./index";

let pathname = "patton-sr/mainogbsc"

if (true) {
    pathname = "patton-sr/sbdlocktest"
}
export function getMiningRecord(pageSize, page) {

    return fetchQueryBase(pathname, {
        text: `{
            lockRecords(first:${pageSize} skip:${pageSize * (page - 1)} ){
            user
            lockAmount
            period
            weight
            receiveSVT
            blockTimestamp
             }
        }`
    }, "")
}
export function getMyMiningRecord(account) {

    return fetchQueryBase(pathname, {
        text: `{
            lockRecords(where:{user_contains:"${account}" }){
            user
            lockAmount
            period
            weight
            receiveSVT
            blockTimestamp
             }
        }`
    }, "")
}

export function getWithdrawRecord(pageSize, page) {
    return fetchQueryBase(pathname, {
        text: `{
            withdrawRecords(first:${pageSize} skip:${pageSize * (page - 1)} ){
                user
                unLockAmount
                period
                weight
                burnSVT
                blockTimestamp
             }
        }`
    }, "")
}
export function getMyWithdrawRecord(account) {
    return fetchQueryBase(pathname, {
        text: `{
            withdrawRecords(where:{user_contains:"${account}" }){
                user
                unLockAmount
                period
                weight
                burnSVT
                blockTimestamp
             }
        }`
    }, "")
}

export function getWithdrawSrtRecord(pageSize, page) {
    return fetchQueryBase(pathname, {
        text: `{
            claimSrtRecords(first:${pageSize} skip:${pageSize * (page - 1)} ){
                user
                srtAmount
                blockTimestamp
                 }
        }`
    }, "")
}
export function getMyWithdrawSrtRecord(account) {
    return fetchQueryBase(pathname, {
        text: `{
            claimSrtRecords(where:{user_contains:"${account}" }){
                user
                srtAmount
                blockTimestamp
                 }
        }`
    }, "")
}

export function getAdminDepositRecord(pageSize, page) {
     return fetchQueryBase(pathname, {
        text: `{
            adminDeposits(first:${pageSize} skip:${pageSize * (page - 1)} ){
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
        adminWithdraws(first:${pageSize} skip:${pageSize * (page - 1)} ){
               admin
               token
               amount
               blockTimestamp
                }
       }`
   }, "")
}