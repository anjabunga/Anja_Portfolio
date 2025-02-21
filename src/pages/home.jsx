import React from 'react'
import { ScrollRestoration } from 'react-router-dom'
import Hero from '../components/sections/hero'
import CallToAction from '../components/sections/callToAction'
import Partners from '../components/sections/partners'
import PortfolioPreview from '../components/sections/portfolio_preview'

const Home = () => {
  return (
    <>
        <Hero/>
        <PortfolioPreview/>
        <Partners/>
        <CallToAction/>
        <ScrollRestoration/>
    </>
  )
}

export default Home