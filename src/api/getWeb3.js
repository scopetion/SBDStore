import Web3 from "web3";

let currentProvider = null
const getWeb3 =async (provide)=>{
    return new Promise((resolve,reject)=>{
        if(provide){
            currentProvider = provide
            return;
        }
        else if(window.ethereum.typeOf !== undefined){
            let web3 = new Web3(window.ethereum)
            currentProvider = window.ethereum
            resolve({
                web3,
                account:currentProvider.accounts.length > 0 && currentProvider.accounts ? currentProvider.accounts[0] : ""
            })   
        }
        reject(new Error('error'))

    })
    
    
    
}
export default getWeb3;