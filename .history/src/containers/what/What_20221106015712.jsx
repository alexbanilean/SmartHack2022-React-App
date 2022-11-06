import React from 'react'
import { Feature } from '../../components'
import './what.css'

const What = () => {
  return (
    <div className='ckmint__what section__padding' id='#what'>
      <div className='ckmint_what-feature'>
        <Feature title="What is CryptoMint" text="We are avid enjoyers of the crypto market and the blockchain who want to introduce more people to this new and exciting world. Our goal is to make cryptocurrency easy to understand and help individuals experiment with their own tokens that can be listed on a exchange."/>
      </div>
      <div className='ckmint_what-heading'>
        <h1 className='gradient-text'>Introducing the most advanced token creator</h1>
      </div>
      <div className='ckmint_what-container'>
        <Feature title="Create yout token" text="You don't need to run any code, Just click"/>
        <Feature title="List it on the exchange"/>
        <Feature title="Check transactions"/>
      </div>
    </div>
  )
}

export default What