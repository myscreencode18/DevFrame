import React from 'react'
import HeroSection from './HeroSection'
import ProjectsSection from './ProjectsSection'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'

const AllSection = () => {
  return (
    <div>
        <HeroSection/>
        <ProjectsSection/>
        <AboutMe/>
        <Skills/>
        <Testimonials/>
        <Contact/>
        <Footer/>

    </div>
  )
}

export default AllSection