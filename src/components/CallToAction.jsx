import React from 'react'
import ctaBg from '/home/cta/cta-bg.png'

const CallToAction = () => {
    return (
        <section className="cta-area py-[120px] relative" style={{ backgroundImage: `url(${ctaBg})`, backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="absolute inset-0 bg-[#D9D9D9] opacity-50 z-10"></div>
            <div className="container relative z-20">
                <div className="mx-auto text-center">
                    <h2 className='mb-6'>
                        Take Action! Make an Impact.
                    </h2>
                    <p className='mb-8'>
                        Every moment counts your support can transform lives right now.
                    </p>
                    <a className='primary-btn inline-block' href="#">Donate Now <i className="ri-hand-heart-fill"></i></a>
                </div>
            </div>
        </section>
    )
}

export default CallToAction