import React from 'react'
import SkillsCard from '../cards/SkillsCard'
import { skills } from '../utils/skills-utils'

const Skills = () => {
  return (
    <div name='skills' className='bg-gray-100'>
        <div className='container mx-auto'>
            <div className='min-h-screen flex flex-col justify-center items-center'>
                <div className='w-full text-center'>
                    <span className='text-[20px] text-gray-600 font-poppins font-semibold'>Skills</span>
                </div>
                <div className='w-full min-h-[55vh] grid mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-5  place-items-center p-10'>
                    {skills.map(items => {
                      return(
                        <div key={items.id}>
                            <SkillsCard />
                        </div>
                      )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills