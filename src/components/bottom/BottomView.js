
import logo from '../../imgs/logo.png'
import icon1 from '../../imgs/11.png'
import icon2 from '../../imgs/22.png'
import icon3 from '../../imgs/66.png'
import icon4 from '../../imgs/99.png'
import BottomStyle from './BottomViewStyle'

const Bottom = () => {

    return (
        <BottomStyle>
            <div className='bottom'>
                <div className='bottom-box'>
                    <div className='left'>
                        <img src={logo} style={{ width: '150px' }} />
                        <p>Copyright ©FireDAO</p>
                    </div>
                    <div className='right'>
                        <div className='right-text'>
                            <span>Funding</span>
                            <span>Token</span>
                            <span>NFT</span>
                            <span>Lock Mining</span>
                            <span>Swap</span>
                            <span>Leaderboard Bonus</span>
                        </div>
                        <div className='right-icon'>
                            <img src={icon1} style={{width:"40px"}}/>
                            <img src={icon2} style={{width:"40px"}}/>                            
                            <img src={icon3} style={{width:"40px"}}/>
                            <img src={icon4} style={{width:"40px"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </BottomStyle>
    )

}
export default Bottom