import React from 'react'
import DonationInfo from '../components/DonationInfo.jsx'
import CallToAction from '../components/CallToAction.jsx'

const Donation = () => {
    return (
        <div className="donation-page">
            <section className="page-hero  py-60 relative">
                <div className="hero-bg"></div>
                <div className="container text-center">
                    <h1 className="mb-6">Make a Donation</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Your generosity can transform lives. Every contribution counts and makes a real difference.
                    </p>
                </div>
            </section>
            <DonationInfo />
            <section className="donation-methods py-20 bg-white">
                <div className="container text-center">
                    <h2 className="mb-12">Ways to Donate</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="method-card p-8 bg-[#FFF2CC] rounded-xl max-w-sm">
                            <i className="ri-hand-heart-fill text-5xl text-[#28A745] mb-4"></i>
                            <h3 className="mb-4">One-Time Donation</h3>
                            <p>Make a single donation to support our immediate needs and ongoing projects.</p>
                        </div>
                        <div className="method-card p-8 bg-[#FFF2CC] rounded-xl max-w-sm">
                            <i className="ri-repeat-fill text-5xl text-[#28A745] mb-4"></i>
                            <h3 className="mb-4">Monthly Giving</h3>
                            <p>Become a monthly donor and provide sustained support for long-term impact.</p>
                        </div>
                        <div className="method-card p-8 bg-[#FFF2CC] rounded-xl max-w-sm">
                            <i className="ri-gift-fill text-5xl text-[#28A745] mb-4"></i>
                            <h3 className="mb-4">Corporate Partnership</h3>
                            <p>Partner with us as an organization to create meaningful change together.</p>
                        </div>
                    </div>
                </div>
            </section>
            <CallToAction />
        </div>
    )
}

export default Donation