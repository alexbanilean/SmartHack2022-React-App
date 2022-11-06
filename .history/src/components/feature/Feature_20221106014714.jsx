import React from 'react'
import './feature.css'



const Feature = ({ title, text }) => {
  return (
    <div className='ckmint__features-container'>
      <div className='ckmint__features-container__feature-title'>
        <div />
        <h1>{title}</h1>
        <div className='ckmint__features-container__feature-text'>
          {text}
        </div>
      </div>
    </div>
  )
}

export default Feature