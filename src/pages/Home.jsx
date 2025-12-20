import React from 'react'
import Hero from '../components/Hero.jsx'
import Status from '../components/Status.jsx'
import FuturePlans from '../components/FuturePlans.jsx'
import DonationInfo from '../components/DonationInfo.jsx'
import VolunteerHome from '../components/VolunteerHome.jsx'
import CallToAction from '../components/CallToAction.jsx'

const Home = () => {
    return (
        <>
            <Hero />
            <Status />
            <FuturePlans />
            <DonationInfo />
            <VolunteerHome />
            <CallToAction />
        </>
    )
}

export default Home