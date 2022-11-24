import React from 'react'
import WorkExpCard from '../cards/WorkExpCard'
import { workExp } from '../utils/work-utils'

const WorkExperience = () => {
  return (
    <div name='work-experience' className='bg-gray-200'>
        <div className='container mx-auto'>
            <div className='min-h-screen flex justify-center items-center bg-green-400'>
                <div className='grid mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 place-items-center gap-5 mx-10'>
                  {workExp.map(items => {
                    return(
                      <WorkExpCard />
                    )
                  })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkExperience