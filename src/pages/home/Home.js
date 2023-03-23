import React, { useEffect } from 'react'
import About from './About'
import Contact from './Contact'
import Experiences from './Experiences'
import Header from './Header'
import Work from './Work'

function Home() {
  
  useEffect(()=>{
    window.scroll(0,0)
  }, [])

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