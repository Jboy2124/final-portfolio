import React from 'react'

const SkillsCard = ({ type, skill }) => {
  return (
      <div className='rounded w-[300px] h-[230px] bg-[#E0C097] shadow-lg'>
          <div className='bg-[#B85C38] rounded-t w-full h-[40px] text-[16px] flex justify-center items-center'>
              <span className='text-[14px] text-[#E0C097] font-poppins'>{type}</span>
          </div>
          <div>
              <ul className='list-disc px-14 py-4 text-[14px] text-[#5C3D2E] font-poppins'>
                  {
                    skill.map((items, index) => {
                      return(
                        <li key={index}>{items}</li>
                      )
                    })
                  }
              </ul>
          </div>
      </div>
  )
}

export default SkillsCard