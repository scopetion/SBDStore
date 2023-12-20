
import React, { useState, useEffect } from 'react';
import { MetaMaskSDK } from '@metamask/sdk';
import { MetaMaskProvider } from '@metamask/sdk-react';
import { Button } from "antd";
import detectEthereumProvider from '@metamask/detect-provider';
import { connect, useCreContext } from '../../api/connect';
import allVersion from '../../api/allVersion'
import WalletStyle from "./WalletStyle"
import { useLocation } from 'react-router-dom';


const ConnectWallet = () => {
    const [showWallet, setShowWallet] = useState(false);
    const { state, dispatch } = useCreContext()
    const location = useLocation()


    useEffect(() => {
        detectEthereumProvider().then((provider) => {

            if (provider) {
                startApp(provider);
            } else {
                console.log('Please install MetaMask!');
            }
        })


    }, [])

    const startApp = async (provider) => {
        if (provider !== window.ethereum) {
            console.error('Do you have multiple wallets installed?');
        }
        else {
            let account = await window.ethereum.request({ method: 'eth_accounts' })
            if (account && account[0]) {
                await connect(state, dispatch)
            }
        }
    }

    const connectWallet = async () => {
        await connect(state, dispatch)
    }

    const connectBSC = async () => {
        let chainID = await window.ethereum.request({ method: 'eth_chainId' })
        if (chainID !== allVersion.testChainID) {
            //添加链
            try {
                // await window.ethereum.request({method:"wallet_getPermissions"})
                await window.ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [
                        {
                            chainId: allVersion.testChainID,
                            chainName: "BNB Smart Chain Testnet",
                            rpcUrls: ['https://bsc-testnet.blockpi.network/v1/rpc/public'],
                            nativeCurrency: {
                                name: "tBNB",
                                symbol: "tBNB",
                                decimals: 18
                            },
                            blockExplorerUrls: [
                                allVersion.testBNB
                            ]
                        }
                    ]
                })

                //切换链
                await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{
                        chainId: allVersion.testChainID
                    }]
                })
            }
            catch (e) {
                console.log(e);
            }
        }
    }


    return (
        <WalletStyle>
            <div className="container-wall">
                <div className="btn-box">
                    <Button onClick={() => { connectBSC() }}>BSC  <span style={{ borderRadius: '50px', width: '7px', height: '7px', background: 'white', margin: '0px 0px 3px 25px' }}></span>
                        {
                            // ? <span style={{ borderRadius: '50px', width: '7px', height: '7px', background: 'rgb(52,255,0)', margin: '0px 0px 3px 25px' }}></span> : <span style={{ borderRadius: '50px', width: '7px', height: '7px', background: 'white', margin: '0px 0px 3px 25px' }}></span>
                        }

                    </Button>
                    {
                        <Button onClick={(e) => { connectWallet() }}>
                            {
                                state.account ? state.account.substr(0, 5) + "..." + state.account.substr(state.account.length - 5, state.account.length) : " Connect Wallet"
                            }
                        </Button>
                    }

                </div>
            </div>

        </WalletStyle>
    )
}
export default ConnectWallet