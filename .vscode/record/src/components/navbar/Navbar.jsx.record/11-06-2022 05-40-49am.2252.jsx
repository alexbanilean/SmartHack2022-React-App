import React from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import { useState } from 'react'
import x from '../../App'

function ConnectToWallet(){

  alert(Object.entries(x).map((key,value) => ));

  // if (status === "initializing") return <div>Synchronisation with MetaMask ongoing...</div>

  // if (status === "unavailable") return <div>MetaMask not available :</div>

  // if (status === "notConnected") return <button onClick={connect}>Connect to MetaMask</button>

  // if (status === "connecting") return <div>Connecting...</div>

  // if (status === "connected") return <div>Connected account {account} on chain ID {chainId}</div>
}

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#what">What is CryptoMint?</a></p>
  <p><a href="#faq">FAQ</a></p>
  <p><button onClick={ConnectToWallet}>Connect Wallet</button></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='ckmint__navbar'>
      <div className='ckmint__navbar-links'>
        <div className='ckmint__navbar-links-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='ckmint__navbar-links_container'>
          <Menu />
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