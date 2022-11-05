import React from 'react'
import './header.css'
import cloud from '../../assets/logo.svg'

const Header = () => {
  return (
    <div className='ckmint__header section__padding' id='home'>
      <div className='ckmint__header-content'>
        <h1 className='gradient__text'>Create your own cryptocurrency with no code required</h1>
        <p> Our easy-to-use crypto generator allows you to make your own custom token on the Ethereum blockchain without needing any programming experience.</p>
        <div className='ckmint__header-content-input'>
          <button type='button'>Get started</button>
          <button type='button'>Learn more</button>
        </div>
        <div className='ckmint__header-image'>
          <img src={cloud} alt='cloud'/>
        </div>
      </div>
    </div>
  )
}

export default Header