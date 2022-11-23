import React from 'react'
import { menu } from '../utils/menu-utils'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='bg-primary fixed top-0 left-0 right-0 shadow-lg'>
        <div className='container mx-auto'>
            <div className='w-full h-[80px] flex justify-between items-center'>
                <div className='text-[30px] font-poppins font-semibold text-gray-100'>
                    <Link to='hero-section' smooth={true} duration={400} className='cursor-pointer'>
                        portfolio
                        <span className='text-pink-600'>.</span>
                    </Link>
                </div>
                <div className='flex justify-end items-center space-x-5'>
                    <div>
                        <ul className='flex items-center space-x-5'>
                            {menu.map(items => {
                                return(
                                    <li key={items.id} className='cursor-pointer font-poppins text-[15px] text-gray-100 hover:text-pink-600 duration-300'>
                                        <Link to={items.link} smooth={true} duration={400}>
                                            {items.name}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='rounded px-10 py-2 cursor-pointer bg-pink-600 hover:bg-pink-700 hover duration-300'>
                        <button className='text-gray-100 font-poppins text-[15px]'>Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar