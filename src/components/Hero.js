import React from 'react'
import SocialMedia from './SocialMedia'
import { iconMenu } from '../utils/side-menu-utils'
import { Link } from 'react-scroll'
import Personal from '../assets/personal/JBA.jpg'


const Hero = () => {
  return (
    <div name='hero-section' className='bg-[#E0C097]'>
        <div>
            <ul className='mobile:hidden tablet:hidden flex flex-col fixed left-0 top-[40%] cursor-pointer'>
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
            <div className='min-h-[60vh] mobile:grid mobile:grid-cols-1 tablet:grid tablet:grid-cols-1 laptop:space-x-5 flex justify-between items-center mobile:px-[20px] px-[100px] pt-52'>  
                <div className='w-full grid grid-cols-1 place-items-center'>
                    <div className='rounded-full w-[250px] h-[250px] ring-8 ring-gray-200 overflow-hidden'>
                        <img src={Personal} alt='id' className='object-center object-cover' />
                    </div>
                </div>
                <div className=''>
                    <p className='text-[text-16px] text-gray-700 font-poppins'>Hi, I am</p>
                    <p className='text-[45px] text-[#3F3B6C] font-jost font-bold'>JUFEL BACALSO ABECIA</p>
                    <p className='text-[25px] text-gray-700 font-poppins font-semibold'>i am a full-stack <span className='text-[25px] text-pink-600'>web developer.</span></p>
                    <p className='text-[16px] text-gray-700 font-poppins mt-3'>Web design is not about making a website—it’s 
                            about making an investment in your organization. Successful web design takes into account more than just aesthetics… 
                            It’s a reflection of you, your company, and your vision.</p>
                    <div className='mt-10'>
                        <button className='rounded px-10 py-2 text-[15px] font-poppins text-[#E0C097] bg-[#B85C38] hover:bg-[#5C3D2E] duration-300'>
                            <Link to='skills' smooth={true} duration={400}>
                                View Skills
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L48,234.7C96,245,192,267,288,250.7C384,235,480,181,576,160C672,139,768,149,864,176C960,203,1056,245,1152,240C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
  )
}

export default Hero