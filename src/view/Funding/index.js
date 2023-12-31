import { useState, useEffect } from "react";
import { Button, Switch, Select, Modal, Form, Input, Pagination, Empty } from "antd";
import usdt from '../../imgs/usdt.png'
import sbd from '../../imgs/SBD.png'
import svt from '../../imgs/svt.png'
import { CloseCircleOutlined } from '@ant-design/icons';
import { useCreContext } from '../../api/connect'
import { dealMethods, viewMethods } from "../../api/contractFun";
import { getConContract, getContractName } from "../../api/contractDemo";
import judgeStatus from "../../api/judgeStatus";
import BigNumber from "bignumber.js";
import addressAll from '../../api/addressAll'
import Max from '../../utils/constant'
import { showNumber } from "../../utils/shown";
import { getRecommender, getAllRegisters, getAllAdminRate, getDonateRecord } from "../../graph/purChaseGQL";
import bigpic from '../../imgs/BigNode.png'
import smallpic from '../../imgs/SmallNode.png'
import superpic from '../../imgs/SuperNode.png'

import FundingStyle from './style.js';

const Funding = (props) => {
    let { state, dispatch } = useCreContext();
    const [curnav, setCurnav] = useState(1)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [price, setPrice] = useState(0.01)
    const [USDTBalance, setUSDTBalance] = useState()
    const [USDTTotal, setUSDTTotal] = useState()
    const [SBDBalance, setSBDBalance] = useState()
    const [sbdval, setSbdVal] = useState(0)
    const [amount, setAmount] = useState(0)
    const [receiveSBD, setReceiveSBD] = useState(0)
    const [receiveSVT, setReceiveSVT] = useState(0)
    const [SVTBalance, setSVTBalance] = useState()
    const [accountState, setAccountState] = useState({})
    const [recommender, setRecommender] = useState([])
    const [registerId, setRegisterId] = useState()
    const [nodeName, setNodeName] = useState(0)

    const [admin, setAdmin] = useState()
    const [teamList, setTeamlist] = useState([])
    const [teamlv, setTeamlv] = useState()

    const [smallNode, setSmallNode] = useState()
    const [bigNode, setBigNode] = useState()
    const [superNode, setSuperNode] = useState()
    const [smallAvaliable, setSmallAvaliable] = useState()
    const [bigAvaliable, setBigAvaliable] = useState()
    const [superAvaliable, setSuperAvaliable] = useState()
    const [nodeMap, setNodeMap] = useState()

    const [income, setIncome] = useState(0)

    const payOptions = [
        {
            value: '200',
            label: '200',
        },
        {
            value: '500',
            label: '500',
        },
        {
            value: '1000',
            label: '1000',
        },
        {
            value: '2000',
            label: '2000',
        },
        {
            value: '5000',
            label: '5000',
        },
        {
            value: '10000',
            label: '10000',
        }
    ]

    const [form] = Form.useForm()
    const handelDealMethods = async (name, params) => {
        let contractAdd = await getContractName('spbd', state.api)
        await dealMethods(contractAdd, state.account, name, params)
    }
    const handelViewMethods = async (name, params) => {
        let contractAdd = await getContractName("spbd", state.api)
        return await viewMethods(contractAdd, state.account, name, params)
    }

    const handelTotal = async () => {
        let contractAdd = await getConContract('erc20', addressAll['USDT'].address, state.api)
        let res = await viewMethods(contractAdd, state.account, "balanceOf", [addressAll["spbd"].address])
        console.log(res);
        setUSDTTotal(BigNumber(res).dividedBy(10 ** 18).toString())
    }
    //通过创建usdt合约实例，调用erc20代币接口，拿到余额【coinName即每个代币的名字，name为合约名字】
    const handelCoinMethods = async (name, coinName, params) => {
        let usdtContractAdd = await getContractName(coinName, state.api)
        return await viewMethods(usdtContractAdd, state.account, name, params)
    }


    const handleChange = async (value) => {

        if (value >= 0) {
            setAmount(value / price)
            setSbdVal(value)
            console.log(amount);
        }
        let res = await handelViewMethods("receiveSbd", [value])
        let res1 = await handelViewMethods("receiveSvt", [value])
        console.log(res);
        setReceiveSBD(res)
        setReceiveSVT(res1)
    };
    const handleChange1 = (value) => {
        console.log(value);
    };

    const showModal = () => {
        setIsModalOpen(true);

    };
    //获取子图 来判断是否有上级 邀请码
    const gecommender = async (address) => {
        let res = await getRecommender(address)
        console.log(res);
        setRecommender(res)
        if (res.data && res.data.allRegisters && res.data.allRegisters[0]) {
            const resultCommend = res.data.allRegisters
            resultCommend.map((i) => {
                setRecommender(i.recommenders)
                setRegisterId(i.Contract_id)
            })

        }
    }
    const handleOk = async () => {
        setIsModalOpen(false);
        try {

            let signAdd = "";
            //super  邀请码是通过子图【address】查出上级  有的话不需要在填写邀请码
            if (accountState.supe && recommender) {
                signAdd = state.account
            }

            else {
                if (!form.getFieldValue().code) {
                    return
                }
                signAdd = form.getFieldValue().code.toString()
            }
            await handelDealMethods("register", [signAdd.toString()])

        }
        catch (e) {
            console.log(e);
        }
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
    };

    const getPrice = async () => {
        let res = await handelViewMethods("salePrice", [])
        console.log(res);
        setPrice(BigNumber(res).dividedBy(1000).toString())

        console.log(price);
    }

    const getCoinBalance = async () => {
        let USDTBalanceOf = await handelCoinMethods('balanceOf', "USDT", [state.account])
        setUSDTBalance(BigNumber(USDTBalanceOf).dividedBy(10 ** 18).toString())

        let SBDBlanceOf = await handelCoinMethods("balanceOf", "SBD", [state.account])
        setSBDBalance(BigNumber(SBDBlanceOf).dividedBy(10 ** 18).toString())

        let SVTBlanceOf = await handelCoinMethods("balanceOf", "SVT", [state.account])
        setSVTBalance(BigNumber(SVTBlanceOf).dividedBy(10 ** 18).toString())
    }


    const getState = async () => {
        let basic = await handelViewMethods("isNotRegister", [state.account])
        let supe = await handelViewMethods("checkAddrForSupAccount", [state.account])
        setAccountState({ basic, supe })
    }

    const receiveNft = async () => {
        let res = await handelViewMethods("smallNode", [])
        console.log(res);
        setSmallNode(res)
        let res1 = await handelViewMethods("bigNode", [])
        setBigNode(res1)
        let res2 = await handelViewMethods("supNode", [])
        setSuperNode(res2)

        let contractSmallAdd = await getConContract('SmallLv1', smallNode, state.api)
        let smallInitAmount = await viewMethods(contractSmallAdd, smallNode, 'initAmount', [])
        let smallTotalAmount = await viewMethods(contractSmallAdd, smallNode, 'totalMint', [])
        setSmallAvaliable(smallInitAmount - smallTotalAmount)

        let contractBigAdd = await getConContract('BigLv1', bigNode, state.api)
        let bigInitAmount = await viewMethods(contractBigAdd, bigNode, 'initAmount', [])
        let bigTotalAmount = await viewMethods(contractBigAdd, bigNode, 'totalMint', [])
        setBigAvaliable(bigInitAmount - bigTotalAmount)

        let contractSuperAdd = await getConContract('SuperLv1', superNode, state.api)
        let superInitAmount = await viewMethods(contractSuperAdd, superNode, 'initAmount', [])
        let superTotalAmount = await viewMethods(contractSuperAdd, superNode, 'totalMint', [])
        setSuperAvaliable(superInitAmount - superTotalAmount)

    }

    const getAmount = async () => {

        let num = sbdval
        console.log(num);
        let nodeType = await handelViewMethods("nftType", [showNumber(sbdval)])
        console.log(nodeType);
        if (smallNode && bigNode && superNode) {
            let NodeArr = {
                "smallnode": smallNode,
                "bignode": bigNode,
                "supernode": superNode,

            }
            setNodeMap({
                NodeArr
            })

            if (smallNode == nodeType) {
                setNodeName(NodeArr.smallnode)
                console.log(nodeName)
            }
            if (bigNode == nodeType) {
                setNodeName(NodeArr.bignode)
            }
            if (superNode == nodeType) {
                setNodeName(NodeArr.supernode)
            }

        }

    }

    const getTeamList = async () => {
        let res = await getAllRegisters(state.account)
        let teamAdd = res.data.allRegisters
        // let teamUserAdd =[]
        teamAdd.map(async (i) => {

        })

        // console.log(teamAdd);
        setTeamlist(res.data.allRegisters)
        let teamLvList = await getAllAdminRate()
        let teamArr = teamLvList.data.allteams

        teamArr.map(async (i) => {
            let rewords = await getDonateRecord()
            console.log(rewords);
            let teamRewards = rewords.data.allRecords
            teamRewards.map((i)=>{
                (BigNumber(i.usdtAmount).dividedBy(10 ** 18).toString());
            })
            // console.log(teamArr);
            // setTeamlv(teamLvList.data.allteams)        
        })

    }


    useEffect(() => {
        handelTotal()
        getAmount()
        receiveNft()
    }, [sbdval])

    useEffect(() => {
        console.log(state);
        judgeStatus()
        if (!state.api) {
            return
        }

        getTeamList()
        getState()
        getPrice();
        getCoinBalance()
        gecommender(state.account)
    }, [state.account])
    return (
        <FundingStyle>
            <Modal title="Sign Up" open={isModalOpen} footer={null} onCancel={handleCancel} maskClosable={true}
                style={{ background: 'rgba(19, 19, 19, 1)' }} closeIcon={<CloseCircleOutlined />}>
                <Form name="basic" form={form} >
                    <Form.Item
                        label="Wallet Address "
                        name="code"
                    >
                        {state.account}
                    </Form.Item>
                    {(accountState.supe && recommender) && <Form.Item
                        label="Invitation Code "
                        name="code"
                    >{recommender}

                    </Form.Item>

                    }
                    {!(accountState.supe && recommender) &&
                        <Form.Item
                            label="Invitation Code "
                            name="code"
                        >
                            <Input />
                        </Form.Item>
                    }

                    <Button onClick={handleOk}>Submit</Button>
                </Form>
            </Modal>
            <div className="container">
                <div className="con-header">
                    <span className={"nav-item" + (curnav == 1 ? " active" : '')} onClick={() => { setCurnav(1) }}>Funding</span>
                    <span className={"nav-item" + (curnav == 2 ? " active" : '')} onClick={() => { setCurnav(2) }}>Team</span>
                    <span className={"nav-item" + (curnav == 3 ? " active" : '')} onClick={() => { setCurnav(3) }}>Withdraw</span>
                    <span className={"nav-item" + (curnav == 4 ? " active" : '')} onClick={() => { setCurnav(4) }}>Lv{ }Admin</span>

                </div>
                {
                    curnav == 1 && <div className="box-container">
                        <div className="box-first">
                            <div className="first-contain">
                                <span>Basic Accounts</span>
                                <Switch checked={accountState.basic} />
                            </div>
                            <div className="first-contain">
                                <span>Super Accounts</span>
                                <Switch checked={accountState.supe} />
                            </div>
                            <Button onClick={showModal}>Sign Up</Button>
                            {accountState.basic &&
                                <div>ID:{registerId}</div>
                            }
                        </div>

                        <div className="box-first">

                            <div className="seconed-contain">
                                <span className="contain-title">Price</span>
                                <span>${price} </span>
                            </div>

                            <hr />
                            <div className="seconed-box1">
                                <div className="box1-con">
                                    <span>Your Pay</span>
                                    <span style={{ color: '#8A8080' }}>Balance: {showNumber(USDTBalance)}</span>
                                </div>
                                <div className="box1-con">
                                    <Select
                                        defaultValue="0"
                                        style={{
                                            width: 180,
                                            background: "rgb(28,28,28)",
                                            color: "white",
                                            fontSize: '20px',
                                        }}
                                        options={payOptions}
                                        onChange={handleChange}
                                        value={sbdval} />
                                    <div> <img src={usdt} style={{ width: '30px' }} /> <span>USDT</span></div>
                                </div>
                            </div>
                            <div className="seconed-box1">
                                <div className="box1-con">
                                    <span style={{ color: '#8A8080' }}>Your Receive SBD</span>
                                    <span style={{ color: '#8A8080' }}>Balance: {showNumber(SBDBalance)}</span>
                                </div>
                                <div className="box1-con">
                                    <span className="content-bold">{showNumber(BigNumber(receiveSBD).minus(receiveSVT))}</span>
                                    <div> <img src={sbd} style={{ width: '30px' }} /> <span>SBD</span></div>
                                </div>
                                <hr />
                                <div className="box1-con">
                                    <span style={{ color: '#8A8080' }}>Your Lock SBD</span>
                                </div>
                                <div className="box1-con">
                                    <span className="content-bold">{showNumber(receiveSVT)}</span>
                                    <div> <img src={sbd} style={{ width: '30px' }} /> <span>SBD</span></div>
                                </div>
                                <hr />
                                <div className="box1-con">
                                    <span style={{ color: '#8A8080' }}>Your Receive SVT</span>
                                    <span style={{ color: '#8A8080' }}>Balance: {showNumber(SVTBalance)}</span>
                                </div>
                                <div className="box1-con">
                                    <span className="content-bold">{showNumber(receiveSVT)}</span>
                                    <div> <img src={svt} style={{ width: '30px' }} /> <span>SVT</span></div>
                                </div>
                                <hr />
                                {nodeName == smallNode ?
                                    <div className="box1-con" style={{ display: "block" }}>
                                        <span style={{ color: '#8A8080' }}>Your Receive NFT Available: {showNumber(smallAvaliable)}</span>
                                        <br />
                                        <img src={smallpic} style={{ width: "100px", margin: "10px 34%" }} />
                                    </div> : ""
                                }
                                {nodeName == bigNode ?
                                    <div className="box1-con" style={{ display: "block" }}>
                                        <span style={{ color: '#8A8080' }}>Your Receive NFT Available: {showNumber(bigAvaliable)}</span>
                                        <br />
                                        <img src={bigpic} style={{ width: "100px", margin: "10px 34%" }} />
                                    </div> : ""
                                }
                                {nodeName == superNode ?
                                    <div className="box1-con" style={{ display: "block" }}>
                                        <span style={{ color: '#8A8080' }}>Your Receive NFT Available: {showNumber(superAvaliable)}</span>
                                        <br />
                                        <img src={superpic} style={{ width: "100px", margin: "10px 34%" }} />
                                    </div> : ""
                                }
                                <span className="content-bold">{ }</span>
                                <Button>Swap</Button>
                            </div>
                        </div>

                    </div>

                }
                {
                    curnav == 2 &&
                    <div>
                        <div className="box-container">
                            <div className="box-title">
                                Team Rewards
                            </div>
                            <div className="income-box">
                                <p>USDT Total Income</p>
                                <div>
                                    <img src={usdt} style={{ width: '30px' }} /> <span>{showNumber(USDTTotal)} USDT</span>
                                </div>
                            </div>
                            <div className="super-form">
                                <div className="super-line">
                                    <div className="col">
                                        Lv
                                    </div>
                                    <div className="col">
                                        No.
                                    </div>
                                    <div className="col">
                                        ID
                                    </div>
                                    <div className="col">
                                        Address
                                    </div>
                                    <div className="col">
                                        USDT Rewards
                                    </div>
                                </div>
                                {teamList.length == 0 ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /> :
                                    teamList.map((i, index) => (
                                        <div className="super-list">
                                            <div className="col lv">

                                            </div>
                                            <div className="col no">
                                                {index + 1}
                                            </div>
                                            <div className="col id">
                                                {i.Contract_id}

                                            </div>
                                            <div className="col address">
                                                {i._user.substr(0, 5) + '...' + i._user.substr(i._user.substr.length - 5, i._user.substr.length)}
                                            </div>
                                            <div className="col rewards">
                                                <img src={usdt} style={{ width: "30px" }} />
                                                {/* {BigNumber(i.dividedBy(10 ** 18).toString)} */}
                                            </div>
                                        </div>
                                    ))
                                }
                                <Pagination className="page"
                                    showSizeChanger
                                    onShowSizeChange={onShowSizeChange}
                                    defaultCurrent={3}
                                    total={500}
                                />

                            </div>
                        </div>
                        <div className="box-container">
                            <div className="box-title">
                                Team Funding List
                            </div>

                            <div className="super-form funding-form">
                                <div className="super-overall funding-overall">
                                    <div className="super-line funding-line">
                                        <div className="col">
                                            No.
                                        </div>
                                        <div className="col">
                                            Lv
                                        </div>
                                        <div className="col">
                                            Percentage
                                        </div>
                                        <div className="col">
                                            ID
                                        </div>
                                        <div className="col">
                                            Address
                                        </div>
                                        <div className="col">
                                            Price
                                        </div>
                                        <div className="col">
                                            Cost
                                        </div>
                                        <div className="col">
                                            Receive SBD
                                        </div>
                                        <div className="col">
                                            Lock SBD
                                        </div>
                                        <div className="col">
                                            Receive SVT
                                        </div>
                                        <div className="col">
                                            Receive NFT
                                        </div>
                                        <div className="col">
                                            Time(UTC)
                                        </div>
                                    </div>
                                    {
                                        <div className="super-list funding-list">
                                            <div className="col no">

                                            </div>
                                            <div className="col lv">

                                            </div>
                                            <div className="col percent">

                                            </div>
                                            <div className="col id">

                                            </div>
                                            <div className="col address">

                                            </div>
                                            <div className="col price">

                                            </div>
                                            <div className="col cost">

                                            </div>
                                            <div className="col  rece-sbd">

                                            </div>
                                            <div className="col lock-sbd">

                                            </div>
                                            <div className="col rece-svt">

                                            </div>
                                            <div className="col rece-nft">

                                            </div>
                                            <div className="col time">

                                            </div>
                                        </div>

                                    }
                                    <Pagination className="page"
                                        showSizeChanger
                                        onShowSizeChange={onShowSizeChange}
                                        defaultCurrent={3}
                                        total={500}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    curnav == 3 && <div>
                        <div className="box-container">
                            <div className="box-first">
                                <div className="first-contain" >
                                    <span style={{ width: "auto" }}>Choose to Withdraw Tokens</span>
                                    <Select
                                        defaultValue="0"
                                        style={{
                                            width: 120,
                                        }}
                                        onChange={handleChange1} />
                                </div>
                                <div className="first-contain">
                                    <span style={{ color: "rgba(138, 128, 128, 1)", width: "auto" }}>Your Lock Amount(s)</span>
                                    <span style={{ width: "auto" }}>0</span>

                                </div>
                                <div className="first-contain">
                                    <span style={{ color: "rgba(138, 128, 128, 1)", width: "auto" }}>You can withdraw</span>
                                    <span style={{ width: "auto" }}>0</span>

                                </div>
                                <div className="first-contain" style={{ display: "block" }}>
                                    <span>Withdraw Amount(s)</span>
                                    <Form className="form">
                                        <div className="amount-box" >
                                            <Input />
                                            <Button className="btn-max">Max</Button>
                                        </div>
                                        <Button className="ant-btn">Withdraw</Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div className="box-container">
                            <div className="super-form">
                                <div className="super-line">
                                    <div className="col">
                                        No.
                                    </div>
                                    <div className="col">
                                        Address
                                    </div>
                                    <div className="col">
                                        Withdraw SBD
                                    </div>
                                    <div className="col">
                                        Burn SVT
                                    </div>
                                    <div className="col">
                                        Time(UTC)
                                    </div>
                                </div>
                                {
                                    <div className="super-list">
                                        <div className="col no">
                                            15515555
                                        </div>
                                        <div className="col address">
                                            15515555
                                        </div>
                                        <div className="col with-sbd">
                                            15515555
                                        </div>
                                        <div className="col btrn-svt">
                                            0x21641….B60d
                                        </div>
                                        <div className="col time">

                                        </div>
                                    </div>

                                }
                                <Pagination className="page"
                                    showSizeChanger
                                    onShowSizeChange={onShowSizeChange}
                                    defaultCurrent={3}
                                    total={500}
                                />

                            </div>
                        </div>
                    </div>
                }
                {curnav == 4 && setAdmin && <div>

                    <div className="box-container">
                        <Select
                            style={{
                                width: 220,

                                background: "rgb(28,28,28)",
                                color: "white",
                                fontSize: '20px',
                            }}
                            options={[
                                {
                                    value: 'Team Rewards',
                                    label: 'Team Rewards'
                                },
                                {
                                    value: 'Set Super Accounts',
                                    label: 'Set Super Accounts'
                                }
                            ]}
                        />
                        <div className="box-title">
                            Team Rewards
                        </div>
                        <div className="income-box">
                            <p>USDT Total Income</p>
                            <div>
                                <img src={usdt} style={{ width: '30px' }} /> <span>{showNumber(USDTTotal)} USDT</span>
                            </div>
                        </div>
                        <div className="super-form">
                            <div className="super-line">
                                <div className="col">
                                    Lv
                                </div>
                                <div className="col">
                                    No.
                                </div>
                                <div className="col">
                                    ID
                                </div>
                                <div className="col">
                                    Address
                                </div>
                                <div className="col">
                                    USDT Rewards
                                </div>
                            </div>
                            {
                                <div className="super-list">
                                    <div className="col lv">
                                        15515555
                                    </div>
                                    <div className="col no">
                                        15515555
                                    </div>
                                    <div className="col id">
                                        15515555
                                    </div>
                                    <div className="col address">
                                        0x21641….B60d
                                    </div>
                                    <div className="col rewards">
                                        <img src={usdt} style={{ width: "30px" }} />0.003
                                    </div>
                                </div>

                            }
                            <Pagination className="page"
                                showSizeChanger
                                onShowSizeChange={onShowSizeChange}
                                defaultCurrent={3}
                                total={500}
                            />

                        </div>
                    </div>
                    <div className="box-container">
                        <div className="box-title">
                            Team Funding List
                        </div>

                        <div className="super-form funding-form">
                            <div className="super-overall funding-overall">
                                <div className="super-line funding-line">
                                    <div className="col">
                                        No.
                                    </div>
                                    <div className="col">
                                        Lv
                                    </div>
                                    <div className="col">
                                        Percentage
                                    </div>
                                    <div className="col">
                                        ID
                                    </div>
                                    <div className="col">
                                        Address
                                    </div>
                                    <div className="col">
                                        Price
                                    </div>
                                    <div className="col">
                                        Cost
                                    </div>
                                    <div className="col">
                                        Receive SBD
                                    </div>
                                    <div className="col">
                                        Lock SBD
                                    </div>
                                    <div className="col">
                                        Receive SVT
                                    </div>
                                    <div className="col">
                                        Receive NFT
                                    </div>
                                    <div className="col">
                                        Time(UTC)
                                    </div>
                                </div>
                                {
                                    <div className="super-list funding-list">
                                        <div className="col no">
                                            15515555
                                        </div>
                                        <div className="col lv">
                                            15515555
                                        </div>
                                        <div className="col percent">
                                            15515555
                                        </div>
                                        <div className="col id">
                                            0x21641….B60d
                                        </div>
                                        <div className="col address">
                                            0x21641….B60d
                                        </div>
                                        <div className="col price">
                                            0x21641….B60d
                                        </div>
                                        <div className="col cost">
                                            0x21641….B60d
                                        </div>
                                        <div className="col  rece-sbd">
                                            0x21641….B60d
                                        </div>
                                        <div className="col lock-sbd">
                                            0x21641….B60d
                                        </div>
                                        <div className="col rece-svt">
                                            0x21641….B60d
                                        </div>
                                        <div className="col rece-nft">
                                            0x21641….B60d
                                        </div>
                                        <div className="col time">

                                        </div>
                                    </div>

                                }
                                <Pagination className="page"
                                    showSizeChanger
                                    onShowSizeChange={onShowSizeChange}
                                    defaultCurrent={3}
                                    total={500}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                }
            </div>
        </FundingStyle >
    )
}

export default Funding