import React, { useEffect, useState } from 'react'
import BigNumber from 'bignumber'

async function dealMethods(contract, methodName, account, params) {

    try {
        await contract.methods[methodName](...params).estimateGas({
            from: account,
        }).then(async (gas) => {
            await contract.methods[methodName](...params).send({
                from: account,
                gas: parseInt(BigNumber(gas).multipliedBy(1.2)).toString(),

            }).then((res) => {
                return res
            })
        })
    }
    catch (e) {
        console.log(e);
    }
}

async function viewMethods(contract, methodName, account, params) {
    try {
        let res = await contract.methods[methodName](...params).call({
            from: account
        })
        return res
    }
    catch(e){
        console.log(e);
    }
}


export { dealMethods, viewMethods }