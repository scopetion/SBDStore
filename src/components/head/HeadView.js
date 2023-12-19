import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../imgs/logo.png'
import judgeStatus from '../../api/judgeStatus'
import ConnectWallet from '../wallet/ConnectWallet.js'
import { useLocation } from "react-router-dom";
import {useCreContext} from '../../api/connect'                                                                       
import HeadViewStyle from './HeadViewStyle'

const HeadView = (props) => {
    const { closeDialog, updateData } = props
    let { state, dispatch } = useCreContext();
    let location = useLocation()

    useEffect( () => {
        // let judgeRes = await judgeStatus(state)
        // if (!judgeRes) {
        //     return
        // }
        

    }, [state.account, state.network]);
    return (
        <HeadViewStyle>
            <div className="container-header">
                <div className="left">
                    <img src={logo} style={{ width: "120px" }} />

                </div>
                <div className="font-box">
                    <NavLink className="nav-title" to='./Funding'>Funding</NavLink>
                    <NavLink className="nav-title" to='./Token'>Token</NavLink>
                    <NavLink className="nav-title" to='./NFT'>NFT</NavLink>
                    <NavLink className="nav-title" to='./LockMining'>Lock Mining</NavLink>
                    <NavLink className="nav-title" to='./Swap'>Swap</NavLink>
                    <NavLink className="nav-title" to='./Bonus'>Bonus</NavLink>
                </div>
                <ConnectWallet />
            </div>
        </HeadViewStyle>
    )
}

export default HeadView