import React from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import { useState } from 'react'
import status from '../../App'
import connect from '../../App'
import account from '../../App'
import ethereum from '../../App'
import chainId from '../../App'



function ConnectToWallet(state){

  // const { status, connect, account, chainId, ethereum } = useMetaMask();
  return <div> 
      {status}
      </div>
  //alert(state.status);

  // if (status === "initializing") return <div>Synchronisation with MetaMask ongoing...</div>

  // if (status === "unavailable") return <div>MetaMask not available :</div>

  // if (status === "notConnected") return <button onClick={connect}>Connect to MetaMask</button>

  // if (status === "connecting") return <div>Connecting...</div>

  // if (status === "connected") return <div>Connected account {account} on chain ID {chainId}</div>
}

const Menu = (props) => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#what">What is CryptoMint?</a></p>
  <p><a href="#faq">{props.status}</a></p>
  <p><a href="#" onClick = {props.connect}>Connect to wallet</a></p>
  <p><ConnectToWallet></ConnectToWallet></p>
  <p>status: </p>
  </>
)

const Navbar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='ckmint__navbar'>
      <div className='ckmint__navbar-links'>
        <div className='ckmint__navbar-links-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='ckmint__navbar-links_container'>
          <Menu connect = {props.connect} status = {props.status}/>
        </div>
      </div>
      <div className='ckmint__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="ckmint__navbar-menu_container scale-up-center">
            <div className='ckmint__navbar-menu_container-links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar