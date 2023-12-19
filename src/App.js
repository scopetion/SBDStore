import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Login from './Login/LoginView'
import Funding from './view/Funding/index'

import Token from './view/Token/index'
import NFT from './view/NFT/index'
import Swap from './view/Swap/index'
import LockMining from './view/LockMining/index'
import Bonus from './view/Bonus/index'

import { GlobalStyle } from './pulic/pulblicStyle'
import { AntdStyle } from './pulic/antdStyle'
import HeadView from './components/head/HeadView';
import BottomView from './components/bottom/BottomView';
import { connect, ConnectProvider } from './api/connect';

function App() {

  const location = useLocation();

  return (
    <ConnectProvider>

    <div className='home-container'>
        <GlobalStyle />
        <AntdStyle />

        <div className='home-router'>
          <Routes>
            <Route path='/' element={<Login />}> </Route>
          </Routes>
          <div style={{ background: "linear-gradient(360deg,#1B1B1B 0%,#3E3E3E 100%)" }}>
            <HeadView />
            {
              location.pathname != './' &&

              <div className="App" style={{ position: "relative", height: 'inherit', paddingTop: '0em' }}>
                <div className="flex-container" style={{
                  width: "100%",
                  flexGrow: "1"
                }}>
                  <Routes>
                    <Route path='/Funding' element={<Funding />}> </Route>
                    <Route path='/Token' element={<Token />}> </Route>
                    <Route path='/NFT' element={<NFT />}> </Route>

                    <Route path='/LockMining' element={<LockMining />}> </Route>
                    <Route path='/Swap' element={<Swap />}> </Route>
                    <Route path='/Bonus' element={<Bonus />}> </Route>
                  </Routes>
                </div>
              </div>

            }
            <BottomView />
          </div>
        </div>
     </div>
     </ConnectProvider>

  );
}

export default App;
