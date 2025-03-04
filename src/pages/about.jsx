import React from 'react'
import { ScrollRestoration } from 'react-router-dom'
import AboutCount from '../components/sections/about/aboutCount'
import Summary from '../components/sections/about/summary'
import Resume from '../components/sections/resume'
import Services from '../components/sections/services'


const About = () => {

  return (
    <>
      <AboutCount />
      <Summary />
      <Resume />
      <Services />
      <ScrollRestoration />
    </>
  )
}

export default About