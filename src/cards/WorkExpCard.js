import React from 'react'

const WorkExpCard = ({ image, company, position, employment }) => {
  return (
    <div className='rounded w-[270px] h-[350px] shadow-lg bg-[#E0C097] p-[2px] hover:scale-105 duration-200'>
        <div className='w-full h-[240px] overflow-hidden'>
            <img src={image} alt='Cards' className='object-cover rounded-t'/>
        </div>
        <div className='w-full flex justify-center items-center mt-6'>
            <span className='text-[14px] text-[#001D6E] font-poppins font-semibold'>{company}</span>
        </div>
        <div className='w-full flex justify-center items-center'>
            <span className='text-[14px] text-gray-600 font-poppins'>{ position }</span>
        </div>
        <div className='w-full flex justify-center items-center'>
            <span className='text-[13px] text-gray-600 font-poppins'>{ employment }</span>
        </div>
    </div>
  )
}

export default WorkExpCard