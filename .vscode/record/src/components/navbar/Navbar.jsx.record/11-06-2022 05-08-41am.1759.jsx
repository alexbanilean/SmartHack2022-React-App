import React from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import { useState } from 'react'
//import MetaMask from '../../App'
import { useMetaMask } from "metamask-react";

function MetaMask(){
  
  const { status, connect, account, chainId, ethereum } = useMetaMask();

  alert(status);
  
  if(status === "notConnected")
    return <button onClick={connect}>Connect to MetaMask</button>
  else
    alert("Succes");

  // ethereum.request({method: "eth_requestAccounts"}).then(accounts => {

  //         localStorage.setItem("account", account);
  //         ethereum.request({method: "eth_getBalance", params: [account, "latest"]}).then(result => {
  //               console.log(result);
  //         })
  //   })
}

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#what">What is CryptoMint?</a></p>
  <p><a href="#faq">FAQ</a></p>
  <p><button onClick={MetaMask}>Connect Wallet</button></p>
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