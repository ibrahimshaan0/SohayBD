import React from 'react'
import donationInfoCardImg1 from '/home/donation-info/donation-info-img-1.png'
import donationInfoCardImg2 from '/home/donation-info/donation-info-img-2.png'
import donationInfoCardImg3 from '/home/donation-info/donation-info-img-3.png'

const DonationInfo = () => {
    return (
        <section className="donation-info">
            <div className="container">
                <div className="sectiono-title mb-[120px] text-center max-w-[900px] mx-auto">
                    <h2 className='mb-6'>
                        Be the Reason Someone Smiles Today
                    </h2>
                    <p>
                        Your contribution can bring smiles, hope, and a better future for those in need. Choose a cause and make an impact.
                    </p>
                </div>
                <div className="card-wrapper flex gap-6">
                    <div className="single-card p-40 rounded-xl bg-[#FFF2CC]">
                        <div className="relative mb-6">
                            <img src={donationInfoCardImg1} alt="a clild laying in ground" className='rounded-xl' />
                            <span className="absolute top-2 right-2 bg-[#28A745] text-white px-2 py-1 rounded-lg">
                                75%
                            </span>
                        </div>
                        <h3>
                            Feed the Hungry
                        </h3>
                        <p className='mb-10'>
                            Millions of people sleep hungry every night. Your small donation can provide food and hope to families struggling to survive.
                        </p>
                        <div className="donaton-counter mb-6">
                            <div className="donation-slider"></div>
                            <div className="donation-collections flex justify-between">
                                <span className="collected text-[#E6B800]">$5,200</span>
                                <span className="goal text-[#28A745]">$10,000 Goal</span>
                            </div>
                        </div>
                        <div className="donate-btn">
                            <button className="primary-btn w-full">Donate Now <i class="ri-hand-heart-fill"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DonationInfo