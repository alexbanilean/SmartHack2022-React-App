import React from 'react'

import { Article, Brand, CTA, Feature, Navbar } from './components'
import { Footer, Blog, Possibility, Features, What, Header} from './containers'

const App = () => {
  return (
    <div className='App'>
        <Navbar />
        <Header />
        <Brand />
        <What />
        <Features />
        <Possibility />
        <CTA />
        
    </div>
  )
}

export default App