import { useState, useEffect } from 'react'
import getWeb3 from './getWeb3'
import addressAll from './addressAll'
import { notification } from 'antd';
const CONTRACTS = addressAll
//创建合约实例
function getContractName(name, web3) {
    if(!web3){
        notification.error({
            message: "Please connect",
            description:
                "",
        });
    }
   return new web3.eth.Contract(CONTRACTS[name].abi, CONTRACTS[name].address, {});
}

function getConContract( name, address, web3) {
    return new web3.eth.Contract(CONTRACTS[name].abi,address,{})
}

function getConAddress(name) {
    return CONTRACTS[name].address
}

export {
    CONTRACTS,
    getContractName,
    getConAddress,
    getConContract
}