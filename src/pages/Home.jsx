import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Projects from '../components/Project'
import WhyHireMe from '../components/whyhireme'
import SkillsTools from '../components/SkillsAndTools'
import Footer from '../components/Footer'


function Home() {
  return (
    <>
        <Navbar />
        <Slider />
        <Projects />
        <WhyHireMe />
        <SkillsTools />
        <Footer />
      
    </>
  )
}

export default Home