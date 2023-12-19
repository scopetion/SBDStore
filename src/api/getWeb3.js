import Web3 from "web3";

let currentProvider = null
const getWeb3 = async (provide) => {
    return new Promise(function (resolve, reject) {
        if (provide) {
            currentProvider = provide
            return;
        }
        else if (typeof window.ethereum !== 'undefined') {
            let web3 = new Web3(window.ethereum)
            currentProvider = window.ethereum
            resolve({
                web3,
                account: currentProvider.accounts && currentProvider.accounts.length > 0 ? currentProvider.accounts[0] : ""
            })
        }
        reject(new Error('error'))

    })



}
export default getWeb3;