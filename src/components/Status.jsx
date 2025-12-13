import React from 'react'

const Status = () => {
    return (
        <section className="status bg-[#FFF2CC] backdrop-blur-2xl">

            <div className="container flex justify-between text-center py-10">
                <div className="single-staus">
                    <h2 className='uppercase text-[#28A745] mb-4'>200M</h2>
                    <p>Humans Impacted</p>
                </div>
                <div className="single-staus">
                    <h2 className='uppercase text-[#E6B800] mb-4'>15K</h2>
                    <p>Collaborators</p>
                </div>
                <div className="single-staus">
                    <h2 className='uppercase text-[#28A745] mb-4'>1M</h2>
                    <p>Donations</p>
                </div>
                <div className="single-staus">
                    <h2 className='uppercase text-[#E6B800] mb-4'>35K</h2>
                    <p>archived Campaigns</p>
                </div>
            </div>
        </section>
    )
}

export default Status