import React from 'react'

const ProjectsCard = ({ type, projName, stack, others }) => {
  return (
    <div className='rounded w-[320px] h-[220px] bg-gray-300 shadow-lg hover:scale-105 duration-300'>
        <div className='w-full h-[35px] bg-primary rounded-t flex justify-center items-center'>
            <span className='text-[14px] text-gray-100 font-poppins'>{ type }</span>
        </div>
        <div className='w-full flex justify-center items-center mt-10'>
            <span className='text-[16px] text-pink-600 font-poppins font-semibold'>{ projName }</span>
        </div>
        <div className='w-full text-center px-2'>
            <span className='text-[14px] text-gray-600 font-poppins'>{ stack }</span>
        </div>
        <div className='w-full text-center px-2'>
            <span className='text-[13px] text-gray-600 italic font-poppins'>{ others }</span>
        </div>
    </div>
  )
}

export default ProjectsCard