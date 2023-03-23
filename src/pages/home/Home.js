import React from 'react'
import About from './About'
import Contact from './Contact'
import Experiences from './Experiences'
import Header from './Header'
import Work from './Work'

function Home() {
  return (
    <div>
        <Header />
        <About />
        <Experiences />
        <Work />
        <Contact />
    </div>
  )
}

export default Home