import React from 'react'
import SocialMedia from './SocialMedia'
import { iconMenu } from '../utils/side-menu-utils'
import { Link } from 'react-scroll'
import Personal from '../assets/personal/JBA.jpg'

const Hero = () => {
  return (
    <div name='hero-section' className='min-h-[90vh] bg-[#E0C097]'>
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
            <div className='min-h-[60vh] mobile:grid mobile:grid-cols-1 tablet:grid tablet:grid-cols-1 laptop:space-x-5 flex justify-between items-center mobile:px-[20px] px-[100px] pt-52'>  
                    <div className='w-full grid grid-cols-1 place-items-center'>
                        <div className='rounded-full w-[300px] h-[300px] ring-8 ring-gray-200 overflow-hidden'>
                            <img src={Personal} alt='id' className='object-center object-cover' />
                        </div>
                    </div>
                    <div className=''>
                        <p className='text-[text-16px] text-[#2D2424] font-poppins'>Hi, I am</p>
                        <p className='text-[45px] text-[#2D2424] font-jost font-bold'>JUFEL BACALSO ABECIA</p>
                        <p className='text-[25px] text-[#2D2424] font-poppins font-semibold'>i am a full-stack <span className='text-[25px] text-[#B85C38]'>web developer.</span></p>
                        <p className='text-[16px] text-[#2D2424] font-poppins mt-3'>Web design is not about making a website—it’s 
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
        <svg className='bottom-0 left-0 right-0 overflow-visible'
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320">
                <path fill="#fff" 
                    fillOpacity="1" 
                    d="M0,96L34.3,128C68.6,160,137,224,206,224C274.3,224,343,160,411,149.3C480,139,549,181,617,165.3C685.7,149,754,75,823,80C891.4,85,960,171,1029,208C1097.1,245,1166,235,1234,213.3C1302.9,192,1371,160,1406,144L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                </path>
        </svg>
    </div>
  )
}

export default Hero