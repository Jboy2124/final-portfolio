import React from 'react'

const ProjectsCard = ({ type, projName, stack, others }) => {
  return (
    <div className='rounded w-[290px] h-[220px] bg-[#E0C097] shadow-lg hover:scale-105 duration-300'>
        <div className='w-full h-[35px] bg-[#B85C38] rounded-t flex justify-center items-center'>
            <span className='text-[14px] text-[#E0C097] font-poppins'>{ type }</span>
        </div>
        <div className='w-full flex justify-center items-center mt-10'>
            <span className='text-[16px] text-[#2D2424] font-poppins font-semibold'>{ projName }</span>
        </div>
        <div className='w-full text-center px-2'>
            <span className='text-[14px] text-[#5C3D2E] font-poppins'>{ stack }</span>
        </div>
        <div className='w-full text-center px-2'>
            <span className='text-[12px] text-[#5C3D2E] italic font-poppins'>{ others }</span>
        </div>
    </div>
  )
}

export default ProjectsCard