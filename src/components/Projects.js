import React from 'react'
import ProjectsCard from '../cards/ProjectsCard'
import { proj } from '../utils/proj-utils'

const Projects = () => {
  return (
    <div name='projects' className='min-h-screen'>
        <div className='container mx-auto'>
            <div className='min-h-[80vh] flex flex-col justify-center items-center pt-12'>
                  <div className='w-full flex justify-center items-center'>
                      <span className='text-[20px] text-[#5C3D2E] font-poppins font-semibold'>PROJECTS</span>
                  </div>
                  <div className='min-h-[60vh] w-full grid mobile:grid-cols-1  tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 place-items-center gap-5 p-10'>
                      {proj.map(items => {
                        return(
                          <div key={items.id}>
                              <ProjectsCard 
                                  type={items.type}
                                  projName={items.projName}
                                  stack={items.stack}
                                  others={items.others}
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

export default Projects