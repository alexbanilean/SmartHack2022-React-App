import React from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import { useState } from 'react'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = u

  return (
    <div className='ckmint__navbar'>
      <div className='ckmint__navbar-links'>
        <div className='ckmint__navbar-links-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='ckmint__navbar-links_container'>
          <p><a href="#home">Home</a></p>
          <p><a href="#what">What is CryptoMint?</a></p>
          <p><a href="#faq">FAQ</a></p>
          <p><a href="#wallet">Connect Wallet</a></p>
        </div>
      </div>
      <div className='ckmint__navbar-menu'></div>
    </div>
  )
}

export default Navbar