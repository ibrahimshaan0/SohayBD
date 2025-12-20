import React from 'react'
import FuturePlans from '../components/FuturePlans.jsx'

const Causes = () => {
    return (
        <div className="causes-page">
            <section className="page-hero py-60 relative">
                <div className="hero-bg"></div>
                <div className="container text-center">
                    <h1 className="mb-6">Our Causes</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Explore the various causes we support and see how you can make a difference.
                    </p>
                </div>
            </section>
            <FuturePlans />
            <section className="causes-detail py-20 bg-[#FFF2CC]">
                <div className="container">
                    <h2 className="text-center mb-12">How We Help</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="cause-item p-8 bg-white rounded-xl shadow-lg">
                            <h3 className="mb-4 text-[#28A745]">Emergency Relief</h3>
                            <p>Providing immediate assistance during natural disasters and emergencies to help communities recover quickly.</p>
                        </div>
                        <div className="cause-item p-8 bg-white rounded-xl shadow-lg">
                            <h3 className="mb-4 text-[#28A745]">Community Development</h3>
                            <p>Building sustainable programs that empower communities to thrive through education, healthcare, and economic opportunities.</p>
                        </div>
                        <div className="cause-item p-8 bg-white rounded-xl shadow-lg">
                            <h3 className="mb-4 text-[#28A745]">Child Welfare</h3>
                            <p>Ensuring every child has access to nutrition, education, and a safe environment to grow and develop.</p>
                        </div>
                        <div className="cause-item p-8 bg-white rounded-xl shadow-lg">
                            <h3 className="mb-4 text-[#28A745]">Women Empowerment</h3>
                            <p>Supporting women through skills training, microfinance, and advocacy for equal rights and opportunities.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Causes