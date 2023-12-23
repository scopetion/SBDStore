import React, { useEffect, useState } from 'react'
import BigNumber from 'bignumber'
import { message, notification } from 'antd'

async function dealMethods(contract, methodName, account, params) {
    let wait = message.loading('Wait sign',0)
    try {
        await contract.methods[methodName](...params).estimateGas({
            from: account,
        }).then(async (gas) => {
            await contract.methods[methodName](...params).send({
                from: account,
                // gas: parseInt(BigNumber(gas).multipliedBy(1.2)).toString(),

            }).then(async(res) => {
                setTimeout(wait, 1000);
                notification.success({
                    message:"Success",
                    description:'',
                    onClick:()=>{
                        console.log('Notification Clicked');
                    }
                })
                return res;
            }).catch(e => {
                console.log(e);
            })
        }).catch((e)=>{
            setTimeout(wait, 1000);
            console.log(e);

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