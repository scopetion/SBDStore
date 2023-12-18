import React from "react";
import { Route, Routes } from "react-router-dom";
import { Button } from "antd";
import img1 from '../imgs/img1.png'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'
import logo from '../imgs/logo.png'
import btn from '../imgs/btn.png'
import tp1 from '../imgs/content-img.png'
import tp2 from '../imgs/content-img2.png'
import tp3 from '../imgs/22.png'
import qr1 from '../imgs/qr1.png'
import qr2 from '../imgs/qr2.png'
import qr3 from '../imgs/qr3.png'
import qq from '../imgs/qq.png'
import wechat from '../imgs/wechat.png'

import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import LoginViewStyle from './LoginViewStyle'
const Login = () => {

    const history = useNavigate()
    useEffect(() => {
        
    }, [])
    return (
        <LoginViewStyle>

            <div className="page1">
                <div className="con-header">
                    <img src={logo} className="logo" />
                    <img src={btn} className="app-btn" onClick={() => { history('/funding') }} />
                </div>
                <div className="con-content">
                    <p className="cont-title">SuperBit DAO</p>
                    <p className="box-content">Promoting the spirit of Bitcoin, spreading <br />
                        the concept of encryption, <br />
                        and enhancing personal awareness.</p>
                    <img src={btn} className="app-btn" onClick={() => { history('/funding') }} />
                </div>

            </div>
            <div className="page2">
                <p className="con-title">SuperBit DAO Culture</p>
                <div className="con-boxes">
                    <div className="con-box">
                        <img src={img1} className="page-img1" />
                        <p className="box-title">Mission</p>
                        <p className="box-content">
                            To promote the spirit of Bitcoin, spread the concept of encryption, and enhance personal awareness.
                        </p>
                    </div>
                    <div className="con-box">
                        <img src={img2} className="page-img1" />
                        <p className="box-title">Vision</p>
                        <p className="box-content">
                            To create a global encrypted DAO community of one million people.
                        </p>
                    </div>
                    <div className="con-box">
                        <img src={img3} className="page-img1" />
                        <p className="box-title">Values</p>
                        <p className="box-content">
                            co-creation, co-building, co-governance, and co- ownership
                        </p>
                    </div>
                </div>
            </div>
            <div className="page3">
                <div className="box3-left">
                    <p className="con-title" >
                        Three-Coin Linkage Mechanism
                    </p>
                    <div className="content-box">
                        <p className="content-bold">SBD</p>
                        <p className="box-content">
                            SBD is the ecological token of the DAO. The entire DAO ecosystem revolves around SBD, representing the core ownership rights of the DAO.
                        </p>
                    </div>
                    <div className="content-box">
                        <p className="content-bold">SRT</p>
                        <p className="box-content">
                            SRT is the reward token of the DAO, specifically designated for ecological rewards. SRT can be exchanged for SBD, 20% can be used as spot assets,while the remaining 80% is unlocked by block, and it will be released linearly in about 1 years.                        </p>
                    </div>
                    <div className="content-box">
                        <p className="content-bold">SVT</p>
                        <p className="box-content">
                            SVT is the voting token of the DAO, representing the locking status of SBD. SVT will be automatically minted when DAO members locked.Only those who possess SVT have the voting rights within the DAO, and voting and decision-making rights belong to members who are long-term supporters of the DAO.                        </p>
                    </div>
                </div>
                <div className="box3-right">
                    <img src={tp1} style={{ width: "100%" }} />
                </div>
            </div>
            <div className="page4">

                <div className="box3-left">
                    <img src={tp2} style={{ width: "100%" }} />
                </div>
                <div className="box3-right">
                    <p className="con-title" style={{ textAlign: 'right' }}>
                        SuperBit DAO
                        Ecosystem Token—SBD
                    </p>

                    <p className="box-content" style={{ textAlign: 'right' }}>
                        SuperBit DAO is a decentralized autonomous organization (DAO) based on the BNB network.At its core,
                        SuperBit DAO operates on a community-driven mechanism for development and governance.
                        We will issue the ecological token SBD to the global DAO community, and it will be collectively governed by the holders of SBD within SuperBit DAO.
                        Every holder of SBD is an owner of SuperBit DAO,
                        possessing a sense of ownership and participating in the management and governance of the DAO through governance voting.
                    </p>

                </div>
            </div>
            <div className="page5">

                <div className="box3-left">
                    <p className="con-title" style={{ textAlign: 'left' }}>
                        The fundamental mechanism of the public offering system.
                    </p>
                    <p className="box-content" style={{ textAlign: 'left' }}>
                        All invitation relationships are based on the BNB network through smart contracts that are automatically generated,
                        bound, and verified, ensuring genuine openness, fairness, and transparency within the SuperBit DAO community.
                    </p>
                </div>
                <div className="box3-right">
                    <p className="box-content" style={{ textAlign: 'justify' }}>
                        SuperBit DAO has two membership levels: basic members, who can register by entering an invitation code;
                        and Super members, who become members by subscribing to the original SBD shares.
                        Only Super members have the privilege to refer new members, with each Super member being able to refer a maximum of 50 basic members.
                    </p>

                </div>
            </div>

            <div className="page6">
                <div className="page6-box">

                    <p className="con-title">
                        SuperBit DAO Node Mechanism
                    </p>
                    <div className="box-content">
                        SuperBit DAO implements a node mechanism, currently divided into three types: Super Nodes, Full Nodes, Light Nodes. Each type of node possesses a corresponding Node NFT representing its node identity,
                        and having a Node NFT grants entitlement to the corresponding node's benefits.
                    </div>

                </div>
                <div className="con-boxes">
                    <div className="con-box">
                        <p className="content-bold">Super Nodes</p>
                        <p className="box-content">
                            Subscribing for 10,000U in a single transaction qualifies you to become a SuperBit Community Super node, allowing you to mint one Super Node NFT.
                            This offer is limited to the first 100 subscribers.
                        </p>
                    </div>
                    <div className="con-box">
                        <p className="content-bold">Full Nodes</p>
                        <p className="box-content">
                            Subscribing 5000U, 6000U, 7000U, 8000U, or 9000U in a single purchase can qualify you as a SuperBit community Full Node.
                            Allowing you to mint a Full Node NFT. This offer is limited to the first 300 subscribers.
                        </p>
                    </div>
                    <div className="con-box">
                        <p className="content-bold">Light Nodes</p>
                        <p className="box-content">
                            Subscribing 2000U, 3000U, or 4000U in a single purchase can qualify you as a SuperBit community Light Node.
                            Allowing you to mint a Light Node NFT. This offer is limited to the first 900 subscribers.
                        </p>
                    </div>
                </div>
            </div>

            <div className="page7">
                <p className="con-title">Social</p>
                <img src={tp3} style={{ width: '30px', float: "right" }} />
                <div className="page7-boxes">
                    <div className="page7-box">
                        <img src={qr1} />
                        <img src={qr2} />
                        <img src={qr3} />

                    </div>
                    <div className="page7-box">
                        <img src={wechat} className="icon" style={{ marginLeft: "5em" }} />
                        <img src={qq} className="icon" />
                        <img src={qq} className="icon" style={{ marginRight: "3em" }} />
                    </div>
                </div>
            </div>
            <div>

            </div>
        </LoginViewStyle>
    )
}

export default Login