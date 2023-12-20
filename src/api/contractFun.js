import React, { useEffect, useState } from 'react'

async function dealMethods(contract, methodName, account, params) {

    try {
        await contract[methodName].myMethod(...params).estimateGas({
            from: account,
        }).then(async (gas) => {
            await contract[methodName].myMethod(...params).send({
                from: account,
                // gas:
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
    let res = await contract[methodName].myMethod(...params).call({
        from: account
    })
    return res

}


export { dealMethods, viewMethods }