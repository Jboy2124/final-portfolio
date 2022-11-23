import React from 'react'
import SocialMedia from './SocialMedia'
import { iconMenu } from '../utils/side-menu-utils'


const Hero = () => {
  return (
    <div name='hero-section' className='bg-gray-200'>
        <div className='mobile:hidden fixed left-0 top-[30%] h-[40px] cursor-pointer'>
             {iconMenu.map(items => {
                    return(
                        <div key={items.id}>
                            <SocialMedia 
                                name={items.name}
                                iconName={items.iconName}
                            />
                        </div>
                    )
                })}
        </div>
        <div className='container mx-auto'>
            <div className='min-h-screen flex justify-center items-center'>
                <span className='text-2xl text-gray-600'>Hero Section</span>
            </div>
        </div>
    </div>
  )
}

export default Hero