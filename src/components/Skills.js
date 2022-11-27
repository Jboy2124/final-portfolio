import React from 'react'
import SkillsCard from '../cards/SkillsCard'
import { skills } from '../utils/skills-utils'

const Skills = () => {

  return (
    <div name='skills' className='min-h-screen'>
        <div className='container mx-auto'>
            <div className='min-h-[80vh] flex flex-col justify-center items-center pt-12'>
                <div className='w-full text-center'>
                    <span className='text-[20px] text-[#5C3D2E] font-poppins font-semibold'>SKILLS</span>
                </div>
                <div className={`w-full min-h-[55vh] grid mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-5  place-items-center p-10`}>
                    {skills.map(items => {
                      return(
                        <div key={items.id}>
                            <SkillsCard 
                                type={items.type}
                                skill={items.skill}
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

export default Skills