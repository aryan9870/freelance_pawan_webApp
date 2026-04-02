import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Features from '../components/Features'
import Intro from '../components/Intro'
import OurSuccess from '../components/Ststs'

const Home = () => {
  return (
    <div className='text-gray-600'>
      <Navbar />
      <Hero />
      <OurSuccess />
      <Intro />
      <Features />
    </div>
  )
}

export default Home