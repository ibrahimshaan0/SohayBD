import React from 'react'
import futureImage1 from '/home/future-plans/future-plan-img-1.png'
import futureImage2 from '/home/future-plans/future-plan-img-2.png'
import futureImage3 from '/home/future-plans/future-plan-img-3.png'

const FuturePlans = () => {
    return (
        <section className="future-plans py-[120px]">
            <div className="container flex gap-6">
                <div className="left-content w-1/2 relative">
                    <img src={futureImage1} alt="Future Plan Image 1" className='rounded-xl' />
                    <img src={futureImage2} alt="Future Plan Image 2" className='rouneded-xl absolute right-0 top-8 scale-90' />
                    <img src={futureImage3} alt="Future Plan Image 3" className='rounded-xl absolute right-0 -bottom-16 scale-90' />
                </div>
                <div className="right-content w-1/2">
                    <h2 className='mb-6'>
                        A Mission to Make the World Better
                    </h2>
                    <p className='mb-10'>
                        Our mission is to bring hope, care, and opportunity to those who need it most helping every person live with dignity and purpose.
                        Every donation, no matter how small, helps us take one step closer to building a better, kinder world.Together, we can spread light where it's needed the most because change begins with compassion.
                    </p>
                    <button className="primary-btn border-0 active:border-0">About More <i className="ri-arrow-right-up-line"></i></button>
                </div>
            </div>
            <div className="container pt-[104px] text-center flex justify-around">
                <div className="single-plan flex flex-col items-center gap-6">
                    <span className="icon flex justify-center items-center h-20 w-20 bg-[#FFF2CC] rounded-full ">
                        <i className="ri-graduation-cap-fill"></i>
                    </span>
                    <h3 className='text-center'>
                        Education
                    </h3>
                </div>
                <div className="single-plan flex flex-col items-center gap-6">
                    <span className="icon flex justify-center items-center h-20 w-20 bg-[#FFF2CC] rounded-full ">
                        <i className="ri-hospital-fill"></i>
                    </span>
                    <h3 className='text-center'>
                        Health
                    </h3>
                </div>
                <div className="single-plan flex flex-col items-center gap-6">
                    <span className="icon flex justify-center items-center h-20 w-20 bg-[#FFF2CC] rounded-full ">
                        <i className="ri-home-4-fill"></i>
                    </span>
                    <h3 className='text-center'>
                        Shelter
                    </h3>
                </div>
                <div className="single-plan flex flex-col items-center gap-6">
                    <span className="icon flex justify-center items-center h-20 w-20 bg-[#FFF2CC] rounded-full ">
                        <i className="ri-restaurant-2-fill"></i>
                    </span>
                    <h3 className='text-center'>
                        Food Support
                    </h3>
                </div>
            </div>
        </section>
    )
}

export default FuturePlans