import erc20 from '../abi/erc20.json'
import spbd from '../abi/spbd.json'
import SBD from '../abi/sbd.json'
import SBDLock from '../abi/sbdlock.json'
import SRT from '../abi/SRT.json'
import SVT from '../abi/svt.json'
import Swap from '../abi/swap.json'
import NFTLock from '../abi/nftlock.json'
import OgLock from '../abi/oglock.json'

let Contract 
if(true){
    Contract={
        erc20:{address:'',abi:erc20},
        spbd:{address:'0x65d741A9d21cA93AB8aC202b7e6693AE3656CEFa',abi:spbd},
        SBD:{address:'0x3FED298a1Dd942b9E0F05A5d58f1AFA741847781',abi:SBD},
        SBDLock:{address:'0xb7c359518b3565489a20cd061b42ee57cfb5b0df',abi:SBDLock},
        NFTLock:{address:'0x0FAC788f05A30745b238968eF8c9626e5Dda31bB',abi:NFTLock},
        SRT:{address:'0x283cc14385BEfe07ff12D3Aaa1248F1Dfdf4DA35',abi:SRT},
        SVT:{address:'0x93d04c7311282114F79380F4624EBe3267bBd36A',abi:SVT},
        Swap:{address:'0x93d809098DD687162b81C9f13198e75af73D2E0f',abi:Swap},                                                                           
        OgLock:{address:'',abi:OgLock}

    }
}

export default Contract