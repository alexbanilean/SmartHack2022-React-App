import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='ckmint__header section__padding' id='home'>
      <div className='ckmint__header-content'>
        <h1 className='gradient__text'>Create your own cryptocurrency with no code required</h1>
        <div className='ckmint__header-content-input'>
          <button type='button'>Get started</button>
          <button>Learn more</button>
        </div>
      </div>
    </div>
  )
}

export default Header