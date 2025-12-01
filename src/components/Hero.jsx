import React from 'react'
import heroBg from '/home/hero/hero-bg.png'
import ourFlag from '/home/hero/bangladesh-map-flag.png'
import heroImage from '/home/hero/hero-image.png'

const Hero = () => {
    return (
        <section className="hero relative pt-[140px]">
            <div className="hero-bg"></div>
            <div className="our-flag absolute top-0 right-0 mt-[100px]">
                <img src={ourFlag} alt="bangladesh-flag-map" />
            </div>
            <div className="container flex flex-row justify-between items-center">
                <div className="left-content py-[262px]">
                    <h1 className='max-w-[1060px] mb-[16px]'>
                        Your <span className='text-[#28A745]'>Dontaion</span> Can Change a Life
                    </h1>
                    <p className='mb-[56px]'>
                        Join us to bring hope and a better future to every poor and helpless soul
                    </p>
                    <div className="action-btns">
                        <button className="primary-btn mr-[8px]">Donate Now</button>
                        <button className="secondary-btn">Learn More</button>
                    </div>
                </div>
                <div className="right-content">
                    {/* <img src={heroImage} alt="hero-image" /> */}
                </div>
            </div>
        </section>
    )
}

export default Hero