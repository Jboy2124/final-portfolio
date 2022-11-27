import React from 'react'
import WorkExpCard from '../cards/WorkExpCard'
import { workExp } from '../utils/work-utils'

const WorkExperience = () => {
  return (
    <div name='work-experience' className='min-h-screen'>
    <div className='container mx-auto'>
        <div className='min-h-[90vh] flex flex-col items-center'>
                <div className='min-h-[8vh] flex justify-center items-center pt-10'>
                    <span className='text-[20px] text-[#5C3D2E] font-poppins font-bold'>WORK EXPERIENCES</span>
                </div>
                <div className='grid mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 place-items-center gap-5 mx-10 pt-10'>
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