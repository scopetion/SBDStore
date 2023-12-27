import erc20 from '../abi/erc20.json'
import spbd from '../abi/spbd.json'
import SBD from '../abi/sbd.json'
import SBDLock from '../abi/sbdlock.json'
import SRT from '../abi/SRT.json'
import SVT from '../abi/svt.json'
import Swap from '../abi/swap.json'
import NFTLock from '../abi/nftlock.json'
import OgLock from '../abi/oglock.json'
import SmallLv1 from '../abi/smallNode.json'
import BigLv1 from '../abi/bigNode.json'
import SuperLv1 from '../abi/supNode.json'


let CONTRACTS 



    CONTRACTS={
        erc20:{address:'',abi:erc20},
        spbd:{address:'0x65d741A9d21cA93AB8aC202b7e6693AE3656CEFa',abi:spbd},
        SBD:{address:'0x3FED298a1Dd942b9E0F05A5d58f1AFA741847781',abi:SBD},
        SBDLock:{address:'0xb7c359518b3565489a20cd061b42ee57cfb5b0df',abi:SBDLock},
        NFTLock:{address:'0x0FAC788f05A30745b238968eF8c9626e5Dda31bB',abi:NFTLock},
        SRT:{address:'0x283cc14385BEfe07ff12D3Aaa1248F1Dfdf4DA35',abi:SRT},
        SVT:{address:'0x93d04c7311282114F79380F4624EBe3267bBd36A',abi:SVT},
        Swap:{address:'0x93d809098DD687162b81C9f13198e75af73D2E0f',abi:Swap},                                                                           
        OgLock:{address:'',abi:OgLock},
        USDT: {address: "0x19589F875420b7F0eC16c8D781cD9Ee1f86d8134", abi: erc20},
        SmallLv1: {address: "0x3ffbD63Dcc8C96E3B4f040EF69c01c562D38aC10", abi: SmallLv1},
        BigLv1: {address: "0xEc86BA83251c709a30C2548BA5E4064b272cFF84", abi: BigLv1},
        SuperLv1: {address: "0xc3679f1f3aBedC165F54fAE413f611C436d1E0D6", abi: SuperLv1},
    }


export default CONTRACTS