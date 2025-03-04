import React from 'react'
import { ScrollRestoration } from 'react-router-dom'
import Portfolio from '../components/sections/portfolio'
import PageHeading from '../components/sections/pageHeading'

const Projects = () => {
  return (
    <>
      <PageHeading
        heading={"Projects"}
        description={"Here are some recaps of initiative projects I have ever handled within groups or individual during my academic and organizational life."}
      />
      <Portfolio />
      <ScrollRestoration/>
    </>
  )
}

export default Projects