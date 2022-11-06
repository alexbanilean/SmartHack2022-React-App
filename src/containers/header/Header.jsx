import React from 'react'
import ReactDOM from 'react-dom/client';
import './header.css'
import cloud from '../../assets/cloud.svg'
import Form from '../../Form'
const root = ReactDOM.createRoot(document.getElementById('root'));

function renderForm(account){
  root.render(<Form account = {account}/>);
}

const Header = (props) => {
  return (
    <div className='ckmint__header section__padding' id='home'>
      <div className='ckmint__header-content'>
        <h1 className='gradient__text'>Create your own cryptocurrency with no code required</h1>
        <p> Our easy-to-use crypto generator allows you to make your own custom token on the Ethereum blockchain without needing any programming experience.</p>
        <div className='ckmint__header-content-input'>
<<<<<<< HEAD
          <button type='button' onClick={renderForm}>Get started</button>
=======
          <button type='button' onClick={renderForm(props.account)}>Get started</button>
>>>>>>> 660a18291e115aeaf566559707de407624a21f53
          <button type='button'>Learn more</button>
        </div>
      </div>
      <div className='ckmint__header-image'>
          <img src={cloud} alt='cloud'/>
      </div> 
    </div>
  )
}

export default Header