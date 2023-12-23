import React, { useContext, useReducer } from 'react'
import reducer from './reducer'
import getWeb3 from './getWeb3'
import { notification } from 'antd'
import initState from './initState';

const openNotification = (message) => {
    notification.open({
        message: message,
        description: 'Please Connect',
        onClick: () => {
            console.log('Clicked Connect');
        },
    });
};

const connect = async (state, dispatch) => {
    const { apiState } = state
    if (apiState) {
        console.log(apiState);
        return
    }
    dispatch({ type: "CONNECT_INIT" })

    try {

        await getWeb3().then(async (result) => {

            dispatch({ type: "CONNECT", payload: result.web3 })
            let chainID = await window.ethereum.request({ method: "eth_chainId" })
            dispatch({ type: "SET_NETWORK", payload: chainID })
            console.log(chainID);

            window.ethereum.request({ method: 'eth_requestAccounts' }).then(async (accounts) => {
                if (accounts && accounts.length > 0) {
                   
                    dispatch({ type: "SET_ACCOUNT", payload: accounts[0] }) 
                    dispatch({ type: "CONNECT_SUCCESS" })
                }
            })

            window.ethereum.on('accountsChanged', (accounts) => {
                dispatch({ type: "SET_ACCOUNT", payload: accounts[0] })
                result.web3.eth.getAccounts().then(async res => {
                    let balance = await result.web3.eth.getBalance(res[0])
                    dispatch({ type: "SET_BALANCE", payload: balance / 10 ** 18 })
                })
            })

            window.ethereum.on('chainChanged', (network) => {
                dispatch({ type: "SET_NETWORK", payload: network })
                console.log(network);
                result.web3.eth.getAccounts().then(async res => {
                    let balance = await result.web3.eth.getBalance(res[0])
                    dispatch({ type: "SET_BALANCE", payload: balance / 10 ** 18 })
                    
                })
            })


        })
    }
    catch (e) {
        console.log(e);
    }


}

const CreContext = React.createContext()

const ConnectProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initState)
    const {api} = state
    return <CreContext.Provider value={{ state, dispatch }}>
        {props.children}
    </CreContext.Provider>

}

const useCreContext = () => ({ ...useContext(CreContext) })

export { connect, ConnectProvider, useCreContext }