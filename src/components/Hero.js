import React from 'react'
import SocialMedia from './SocialMedia'
import { iconMenu } from '../utils/side-menu-utils'
import { Link } from 'react-scroll'


const Hero = () => {
  return (
    <div name='hero-section' className='bg-gray-100'>
        <div>
            <ul className='mobile:hidden tablet:hidden flex flex-col fixed left-0 top-[30%] cursor-pointer'>
                {iconMenu.map(items => {
                    return(
                        <li key={items.id} className=''>
                            <SocialMedia 
                                key={items.key}
                                name={items.name}
                                iconName={items.iconName}
                                />
                        </li>
                    )
                })}
            </ul>             
        </div>
        <div className='container mx-auto'>
            <div className='min-h-screen flex justify-start items-center mobile:px-[20px] px-[100px]'>
                <div>
                    <p className='text-[45px] text-gray-700 font-poppins font-bold'>JUFEL BACALSO ABECIA</p>
                    <p className='text-[25px] text-gray-700 font-poppins font-semibold'>i am a full-stack <span className='text-[25px] text-pink-600'>web developer.</span></p>
                    <p className='text-[18px] text-gray-700 font-poppins mt-3'>Web design is not about making a website—it’s 
                        about making an investment in your organization. Successful web design takes into account more than just aesthetics… 
                        It’s a reflection of you, your company, and your vision.</p>
                    <div className='mt-10'>
                        <button className='rounded px-10 py-2 text-[15px] text-gray-100 bg-pink-600 hover:bg-pink-700'>
                            <Link to='skills' smooth={true} duration={400}>
                                View Skills
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero