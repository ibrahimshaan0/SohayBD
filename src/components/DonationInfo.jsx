import React from 'react'
import donationInfoCardImg1 from '/home/donation-info/donation-info-img-1.png'
import donationInfoCardImg2 from '/home/donation-info/donation-info-img-2.png'
import donationInfoCardImg3 from '/home/donation-info/donation-info-img-3.png'
import SingleDonatonCard from './SingleDonatonCard'

const DonationInfo = () => {
    const donationData = [
        {
            image: donationInfoCardImg1,
            heading: "Feed the Hungry",
            description: "Millions of people sleep hungry every night. Your small donation can provide food and hope to families struggling to survive.",
            raised: 5200,
            goal: 10000
        },
        {
            image: donationInfoCardImg2,
            heading: "Support Education",
            description: "Every child deserves quality education. Help us provide books, supplies, and learning opportunities to underprivileged children.",
            raised: 8500,
            goal: 15000
        },
        {
            image: donationInfoCardImg3,
            heading: "Medical Aid",
            description: "Access to healthcare is a basic right. Your contribution can help provide medical treatment and care to those who cannot afford it.",
            raised: 12000,
            goal: 20000
        }
    ];

    return (
        <section className="donation-info py-[120px]">
            <div className="container">
                <div className="sectiono-title mb-[120px] text-center max-w-[900px] mx-auto">
                    <h2 className='mb-6'>
                        Be the Reason Someone Smiles Today
                    </h2>
                    <p>
                        Your contribution can bring smiles, hope, and a better future for those in need. Choose a cause and make an impact.
                    </p>
                </div>
                <div className="card-wrapper flex gap-6 mb-[60px]">
                    <SingleDonatonCard
                        image={donationData[0].image}
                        heading={donationData[0].heading}
                        description={donationData[0].description}
                        raised={donationData[0].raised}
                        goal={donationData[0].goal}
                    />
                    <SingleDonatonCard
                        image={donationData[1].image}
                        heading={donationData[1].heading}
                        description={donationData[1].description}
                        raised={donationData[1].raised}
                        goal={donationData[1].goal}
                    />
                    <SingleDonatonCard
                        image={donationData[2].image}
                        heading={donationData[2].heading}
                        description={donationData[2].description}
                        raised={donationData[2].raised}
                        goal={donationData[2].goal}
                    />
                </div>
                <div className="button-wrapper text-center">
                    <a className='primary-btn' href="#">View All Causes <i className="ri-arrow-right-up-line"></i></a>
                </div>
            </div>
        </section>
    )
}

export default DonationInfo