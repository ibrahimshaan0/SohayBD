import React from 'react'
import heroBg from '/home/hero/hero-bg.png'
import ourFlag from '/home/hero/bangladesh-map-flag.png'
import heroImage from '/home/hero/hero-image.png'

const Hero = () => {
    return (
        <section className="hero relative pt-[140px]">
            <div className="hero-bg"></div>
            <div className="our-flag absolute top-0 right-52 mt-[110px]">
                <img src={ourFlag} alt="bangladesh-flag-map" />
                <img className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rounded-bl-[43%] rounded-br-[42%] mt-[-146px] ml-[-34px]  z-3' src={heroImage} alt="hero-image" />
            </div>
            <div className="container flex flex-row justify-between items-center">
                <div className="left-content py-[262px]">
                    <h1 className='max-w-[1060px] mb-4'>
                        Your <span className='text-[#28A745]'>Dontaion</span> Can Change a Life
                    </h1>
                    <p className='mb-14'>
                        Join us to bring hope and a better future to every poor and helpless soul
                    </p>
                    <div className="action-btns">
                        <button className="primary-btn mr-2">Donate Now <i class="ri-hand-heart-fill"></i></button>
                        <button className="secondary-btn">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero