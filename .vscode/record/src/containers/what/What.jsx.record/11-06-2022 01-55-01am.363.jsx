import React from 'react'
import { Feature } from '../../components'
import './what.css'

const What = () => {
  return (
    <div className='ckmint__what section__padding' id='#what'>
      <div className='ckmint_what-feature'>
        <Feature title="What is CryptoMint" text="We are avid enjoyers of the crypto market and the blockchain"/>
      </div>
      <div className='ckmint_what-heading'>
        <h1 className='gradient-text'>Introducing the most advanced token creator</h1>
      </div>
      <div className='ckmint_what-container'>
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default What