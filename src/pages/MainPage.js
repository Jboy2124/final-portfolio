import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

const MainPage = () => {
  return (
    <div className='bg-gray-200'>
        <Navbar />
        <Hero />
        <WorkExperience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
    </div>
  )
}

export default MainPage