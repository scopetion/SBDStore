import React, { useContext, useReducer } from 'react'
import redux from './redux'
import getWeb3 from './getWeb3'
import { notification } from 'antd'
import { account, network } from './initState';

const openNotification = (message) => {
    notification.open({
        message: message,
        description: 'Please Connect',
        onClick: () => {
            console.log('');
        },
    });
};
const connect = async (state, dispatch) => {
    const { apiState } = state
    if (apiState) {
        console.log(apiState);
        return
    }
    try {
        await getWeb3().then(async (result) => {

            dispatch({ type: "CONNECT", payload: result.web3 })
            let chainID = await window.ethereum.request({ methods: "eth_chainId" })
            dispatch({ type: "SET_NETWORK", payload: chainID })

            window.ethereum.request({ methods: 'eth_requestAccounts' }).then(async accounts => {
                if (accounts && accounts.length > 0) {
                    dispatch({ type: "CONNECT_SUCCESS" })
                    dispatch({ type: "SET_ACCOUNT", payload: accounts })
                }
            })

            window.ethereum.request({ methods: "eth_chainId" }).then((network) => {
                dispatch({ type: "SET_NETWORK", payload: network })

            })

            window.ethereum.on('accountsChanged', async (accounts) => {
                dispatch({ type: "SET_ACCOUNT", payload: accounts })
                result.web3().eth.getAccounts(accounts).then(async res => {
                    let balance = await result.web3().eth.getBalance(res[0])
                    dispatch({type:"SET_BALANCE",payload:balance / 10**18})
                })
            })

            window.ethereum.on('chainChanged',()=>{
                result.web3().eth.getAccounts().then(async res=>{
                    let balance = await result.web3().eth.getBalance(res[0])
                    dispatch({type:"SET_BALANCE",payload:balance / 10**18})
                })
            })

        
        })
    }
    catch {
        dispatch({type:"CONNECT_ERROR"})

    }
}

const CreContext = React.createContext()
const ConnectPro = async (props)=>{
    const [apiState,actions] = useReducer(apiState,actions)

    return(
        <CreContext.Provider value={apiState}>
            {props.children}
        </CreContext.Provider>
    )
}

const useCreContext = ()=>({...useContext(CreContext)})

export { connect,CreContext,ConnectPro,useCreContext }