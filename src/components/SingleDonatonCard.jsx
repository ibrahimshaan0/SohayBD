import React from 'react'

const SingleDonatonCard = ({ image, heading, description, raised, goal }) => {
  const percentage = goal > 0 ? Math.floor((raised / goal) * 100) : 0;
  const displayPercentage = Math.min(percentage, 100);

  return (
    <div className="single-card p-10 rounded-xl bg-[#FFF2CC]">
      <div className="relative mb-6">
        <img src={image} alt={heading} className='rounded-xl' />
        <span className="absolute top-2 right-2 bg-[#28A745] text-white px-2 py-1 rounded-lg">
          {percentage}%
        </span>
      </div>
      <h3>
        {heading}
      </h3>
      <p className='mb-10'>
        {description}
      </p>
      <div className="donaton-counter mb-6">
        <div className="donation-slider w-full h-px bg-[#E6B800] opacity-80 mb-5 relative">
          <div className="h-full bg-[#28A745] absolute top-0 left-0" style={{ width: `${displayPercentage}%` }}></div>
          <div
            className="w-2.5 h-2.5 rounded-full bg-[#E6B800] border-2 border-[#28A745] absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
            style={{ left: `${displayPercentage}%` }}
          ></div>
        </div>
        <div className="donation-collections flex justify-between">
          <span className="collected text-[#E6B800] text-[14px]" > Raised: ${raised.toLocaleString()}</span>
          <span className="goal text-[#28A745] text-[14px]">Goal: ${goal.toLocaleString()}</span>
        </div>
      </div>
      <div className="donate-btn">
        <button className="primary-btn w-full">Donate Now <i className="ri-hand-heart-fill"></i></button>
      </div>
    </div>
  )
}

export default SingleDonatonCard