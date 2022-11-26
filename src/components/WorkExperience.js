import React from 'react'
import WorkExpCard from '../cards/WorkExpCard'
import { workExp } from '../utils/work-utils'

const WorkExperience = () => {
  return (
    <div name='work-experience' className='bg-white'>
        <div className='container mx-auto'>
            <div className='min-h-screen flex flex-col justify-center items-center'>
                <div className='min-h-[8vh] flex justify-center items-center'>
                    <span className='text-[20px] text-[#001D6E] font-poppins font-semibold'>WORK EXPERIENCES</span>
                </div>
                <div className='grid mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 place-items-center gap-5 mx-10'>
                  {workExp.map(items => {
                    return(
                      <div key={items.id}>
                          <WorkExpCard 
                              image={items.image}
                              company={items.company}
                              position={items.position}
                              employment={items.employment}
                          />
                      </div>
                    )
                  })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkExperience