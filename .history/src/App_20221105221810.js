import React from 'react'

import { Article, Brand, CTA, Feature, Navbar } from './components'
import { Footer, Blog, Possibility, Features, What, Header} from './containers'
import

const App = () => {
  return (
    <div className='App'>
        <div className='gradient_bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <What />
        {/* <Features /> */}
        {/* <Possibility /> */}
        <CTA />
        {/* <Blog /> */}
        <Footer />
    </div>
  )
}

export default App