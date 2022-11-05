import React from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='ckmint__navbar'>
      <div className='ckmint__navbar-links'>
        <div className='ckmint__navbar-links-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='ckint__navbar-links_container'>

        </div>
      </div>
    </div>
  )
}

export default Navbar