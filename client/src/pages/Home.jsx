import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Features from '../components/Features'

const Home = () => {
  return (
    <div className='text-gray-600'>
      <Navbar />
      <Hero />
      <Features />
    </div>
  )
}

export default Home