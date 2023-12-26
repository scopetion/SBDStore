import React, { useEffect, useState } from 'react'
import BigNumber from 'bignumber'
import { message, notification } from 'antd'

async function dealMethods(contract, account, methodName,  params) {
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
                message.error(e.message);
            })
        }).catch((e)=>{
            setTimeout(wait, 1000);
            console.log(e);
            message.error(e.message);
        })
        
    }
    catch (e) {
        console.log(e);
        message.error(e.message);
    }
}

async function viewMethods(contract,account ,methodName,  params) {
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