import React from 'react'
import FuturePlans from '../components/FuturePlans.jsx'
import Status from '../components/Status.jsx'

const AboutUs = () => {
    return (
        <div className="about-us-page">
            <section className="page-hero py-60 relative">
                <div className="hero-bg"></div>
                <div className="container text-center">
                    <h1 className="mb-6">About Us</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        We are dedicated to bringing hope and positive change to communities in need across Bangladesh.
                    </p>
                </div>
            </section>
            <Status />
            <FuturePlans />
        </div>
    )
}

export default AboutUs