import {fetchQueryBase} from "./index";


// test07
// let ogname = "patton-sr/7eab"
// test06
let ogname = "patton-sr/cefa"
export function getDonateRecord() {
    return fetchQueryBase(ogname, {
        text: `{
           allRecords(first:1000 orderBy:no orderDirection:desc){
            no
            salePrice
            recommender
            addr
            usdtAmount
            receiveNft
            lockSbd
            sbdAmount
            blockTimestamp
             }
        }`
    }, "")
}

export function getAllAdminRate() {
    return fetchQueryBase(ogname, {
        text: `{
       
         allteams(first:1000){
              admin1
              admin2
              admin3
              admin4
              admin5
              admin6
              admin7
              admin8
              admin9
              addr
              blockTimestamp
            }
              allteamrates(first:1000){
                   rate1
                     rate2
                     rate3
                     rate4
                     rate5
                     rate6
                     rate7
                     rate8
                     rate9
                     addr
                     blockTimestamp
              }
        }`
    }, "")
}

export function getAllInvites() {
    return fetchQueryBase(ogname, {
        text: `{
         allInvites(first: 1000){
                recommender1
                recommender2
                recommender3
                recommender4
                recommender5
                rate1
                rate2
                rate3
                rate4
                rate5
                addr
                blockTimestamp
            }
        }`
    }, "")
}

export function getBlackUsers() {
    return fetchQueryBase(ogname, {
        text: ` {
            blackUsers(first:1000, orderBy: blockTimestamp,orderDirection: desc){
                operator
                user
                blockTimestamp
            }
            }`
    }, "")
}

export function getSecondDonateRecord(addr) {
    return fetchQueryBase(ogname, {
        text: ` {
          allRecords(where: {addrTow: "${addr}"}, first: 1000) {
                id
                no
                addr
                
                usdtAmount
                blockTimestamp
          }
        }`
    }, "")
}

export function getThreeDonateRecord(addr) {
    return fetchQueryBase(ogname, {
        text: `{
          allRecords(where:{addrThree: "${addr}"}, first: 1000) {
            id
            no
            addr
            ethAmount
            usdtAmount
            fdtAmount
            time
          }
        }`
    }, "")
}

export function getSeedDonateRecord() {
    return fetchQueryBase(ogname, {
        text: `{
              claims(first: 1000) {
                id
                _user
                _amount
              }
              donations(first: 1000) {
                id
                _user
                _spend
                _amounts
                _prices
              }
            }`
    }, "")
}

export function getAllRegisters(address) {
    return fetchQueryBase(ogname, {
        text: `{
            allRegisters(first:1000,where: {recommenders: "${address}"}) {
                Contract_id
                recommenders
                _user
            }
        }`
    }, "")
}

export function getAllRegistersRecord() {
    return fetchQueryBase(ogname, {
        text: `{
            allRegisters(first:1000) {
                Contract_id
                recommenders
                _user
            }
        }`
    }, "")
}

export function getRecommender(address) {
    return fetchQueryBase(ogname, {
        text: `{
            allRegisters(first:10,where: {_user_contains: "${address}"}) {
                Contract_id
                recommenders
                _user
            }
        }`
    }, "")
}

export function getAddressFromId(id) {
    return fetchQueryBase(ogname, {
        text: `{
            allRegisters(first:10,where: {Contract_id: "${id}"}) {
                Contract_id
                recommenders
                _user
            }
        }`
    }, "")
}