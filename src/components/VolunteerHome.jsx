import React from 'react'
import volunteerImage from '/home/volunteer/volunteer-image.png'
import rightBg from '/home/volunteer/right-bg.png'

const VolunteerHome = () => {
    return (
        <section>
            <div className="container flex gap-6 py-[120px]">
                <div className="left-content w-1/2" style={{ overflow: 'hidden' }}>
                    <img src={volunteerImage} alt="" style={{ height: '100%', width: 'auto', objectFit: 'cover', objectPosition: 'center center' }} />
                </div>
                <div className="right-content w-1/2" style={{ backgroundImage: `url(${rightBg})`, backgroundPosition: 'right center', backgroundRepeat: 'no-repeat', backgroundSize: 'auto 100%' }}>
                    <h2 className='mb-6'>
                        Join Our Mission Become a Volunteer
                    </h2>
                    <p className='mb-4'>
                        Your time, effort, and kindness can create meaningful change for people who need it the most.
                    </p>
                    <p className='mb-[68px]'>
                        Volunteers are the heart of our mission. Whether it's helping distribute food, organizing community events, supporting campaigns, or reaching people in need your involvement brings hope and support to countless lives.
                        Join us and be a part of something truly impactful.
                    </p>
                    <a className='primary-btn' href="#">Apply Now <i className="ri-mail-fill"></i></a>
                </div>
            </div>
        </section>
    )
}

export default VolunteerHome