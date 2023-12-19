import { useState, useEffect } from 'react'
import getWeb3 from './getWeb3'
import addressAll from './addressAll'
const CONTRACT = addressAll

function getContractName(name,address, web3) {

    return new web3.eth.Contract(CONTRACT[name].abi, CONTRACT[name].address,{})
}

function getConContract( name, address, web3) {
    return new web3.eth.Contract(CONTRACT[name].abi,CONTRACT[name].address,{})
}

function getConAddress(name,address, web3) {
    return new web3.eth.Contract(CONTRACT[name].address,address,{})
}

export {
    CONTRACT,
    getContractName,
    getConAddress,
    getConContract
}