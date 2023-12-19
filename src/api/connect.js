import React, { useContext, useReducer } from 'react'
import reducer from './reducer'
import getWeb3 from './getWeb3'
import { notification } from 'antd'
import initState, { account, network } from './initState';

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
            window.ethereum.request({ methods: 'eth_requestAccounts' }).then(async accounts => {
                if (accounts && accounts.length > 0) {
                    dispatch({ type: "CONNECT_SUCCESS" })
                    dispatch({ type: "SET_ACCOUNT", payload: accounts[0] })
                }
            })

            window.ethereum.on('accountsChanged', async (accounts) => {
                dispatch({ type: "SET_ACCOUNT", payload: accounts[0] })
                result.web3().eth.getAccounts(accounts).then(async res => {
                    let balance = await result.web3().eth.getBalance(res[0])
                    dispatch({type:"SET_BALANCE",payload:balance / 10**18})
                })
            })

            window.ethereum.on('chainChanged',(network)=>{
                dispatch({ type: "SET_NETWORK", payload: network })
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

const ConnectProvider = (props)=>{
    const [state,dispatch] = useReducer(reducer,initState)

    return <CreContext.Provider value={{state,dispatch}}>
            {props.children}
        </CreContext.Provider>
    
}

const useCreContext = ()=>({...useContext(CreContext)})

export { connect,ConnectProvider,useCreContext }