import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Status from './components/Status.jsx'
import FuturePlans from './components/FuturePlans.jsx'
import DonationInfo from './components/DonationInfo.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Status />
      <FuturePlans />
      <DonationInfo />
    </>
  )
}

export default App
