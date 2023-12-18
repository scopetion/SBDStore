
import { Button } from "antd"
import WalletStyle from "./WalletStyle"

const ConnectWallet =()=>{

    return(
        <WalletStyle>
            <div className="container-wall">
                <div className="btn-box">
                    <Button>BSC <span style={{borderRadius:'50px',width:'7px',height:'7px',background:'white',margin:'0px 0px 3px 25px'}}></span></Button>
                    <Button onClick={()=>{}}>Connect Wallet</Button>
                </div>
            </div>

        </WalletStyle>
    )
} 
export default ConnectWallet