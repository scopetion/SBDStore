import { useSDK } from '@metamask/sdk-react';
import React, { useState, useEffect } from 'react';
import { MetaMaskSDK } from '@metamask/sdk';
import { MetaMaskProvider } from '@metamask/sdk-react';
import { Button } from "antd";
import { connect } from '../../api/connect';
import WalletStyle from "./WalletStyle"


const ConnectWallet = (props) => {
    const [currentAccount, setCurrentAccount] = useState();
    // const MMSDK = new MetaMaskSDK();

    // const ethereum = MMSDK.getProvider();
    // const [account, setAccount] = useState();
    // const { sdk, connected, connecting, provider, chainId } = useSDK();

    // const connect = async () => {
    //     ethereum.request({ method: 'eth_requestAccounts', params: [] });
    //     try {
    //         const accounts = await sdk?.connect();
    //         setAccount(accounts?.[0]);
    //     } catch (err) {
    //         console.warn(`failed to connect..`, err);
    //     }
    // };
    const connectWallet = async() => {
        // connect()
        const {ethereum} = window
        if(!ethereum){
            console.log('Please Connect');
            
        }
        try{
            const account = await window.ethereum.request('eth_requestAccounts',()=>{

                console.log(account[0]);
                setCurrentAccount(account[0])
            })
        }
        catch(err){
            console.log(err);
        }
    }


    const walletIsConnect = async () =>{
        const {ethereum} = window
        if(!ethereum){
            console.log('Meta sure you have Meta installed');
            return
        }
        else{
            console.log('Wallet exists')
        }
        try{
            const account = await window.ethereum.request('eth_requestAccounts',()=>{

                console.log(account[0]);
                setCurrentAccount(account[0])
            })
        }
        catch(err){
            console.log(err);
        }
    }


    useEffect(() => {
        walletIsConnect();
    }, [])


    return (
        <WalletStyle>
            <div className="container-wall">
                <div className="btn-box">
                    <Button>BSC <span style={{ borderRadius: '50px', width: '7px', height: '7px', background: 'white', margin: '0px 0px 3px 25px' }}></span></Button>
                    <Button onClick={connectWallet}>Connect Wallet
                        {/* <MetaMaskProvider debug={true} sdkOptions={{
                            checkInstallationImmediately: false,
                            extensionOnly: true,
                            dappMetadata: {
                                name: "Demo React App",
                                url: window.location.host,
                            }
                        }}>

                        </MetaMaskProvider> */}

                    </Button>
                    {/* {connected && (
                        <div>
                            <>
                                {chainId && `Connected chain: ${chainId}`}
                                <p></p>
                                {account && `Connected account: ${account}`}
                            </>
                        </div>
                    )} */}
                </div>
            </div>

        </WalletStyle>
    )
}
export default ConnectWallet