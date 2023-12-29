
import {fetchQueryUrl} from "./index";

// test05 new

let ogname = "https://api.thegraph.com/subgraphs/name/wysten-hgg/superbitdaov2"

if (true) {
    ogname = "https://api.studio.thegraph.com/query/38059/superbitdaotest/v0.0.3"
}
export function getSwapRecords(addr) {
    return fetchQueryUrl(ogname, {
        text: `{
  claims(where: {_user: "${addr}"},first:1000,orderBy: blockTimestamp,orderDirection: desc) {
    id
    _user
    _amount
    blockTimestamp
    _burnSVT
  }
  exchanges(where: {_user: "${addr}"},first:1000,orderBy: blockTimestamp,orderDirection: desc) {
    id
    _user
    _amount
    _receiveSBD
    blockTimestamp
    _lockSBD
    _receiveSVT
  }
}`
    }, "")
}
export function getAllSwapRecords() {
    return fetchQueryUrl(ogname, {
        text: `{
  claims(first:1000,orderBy: blockTimestamp,orderDirection: desc) {
    id
    _user
    _amount
    blockTimestamp
    _burnSVT
  }
  exchanges(first:1000,orderBy: blockTimestamp,orderDirection: desc) {
    id
    _user
    _amount
    _receiveSBD
    blockTimestamp
    _lockSBD
    _receiveSVT
  }
}`
    }, "")
}