import React, { useState } from 'react'
import { menu } from '../utils/menu-utils'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(true)

  return (
    <div className='bg-[#E0C097] fixed top-0 left-0 right-0'>
        <div className='container mx-auto'>
            <div className='w-full h-[80px] flex justify-between items-center'>
                <div className='text-[35px] text-[#5C3D2E] font-poppins font-semibold'>
                    <Link to='hero-section' smooth={true} duration={400} className='cursor-pointer'>
                        portfolio
                        <span className='text-[#B85C38]'>.</span>
                    </Link>
                </div>
                <div className='flex justify-end items-center space-x-5'>
                    <div className='mobile:hidden tablet:hidden'>
                        <ul className='flex items-center space-x-5'>
                            {menu.map(items => {
                                return(
                                    <li key={items.id} className='cursor-pointer font-poppins text-[15px] text-[#5C3D2E] hover:text-[#B85C38] duration-300'>
                                        <Link to={items.link} smooth={true} offset={-80} duration={400} >
                                            {items.name}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='mobile:hidden tablet:hidden rounded px-8 py-2 cursor-pointer bg-[#B85C38] hover:bg-[#5C3D2E] duration-300'>
                        <button className='text-[#E0C097] font-poppins text-[15px]'>Download CV</button>
                    </div>
                    <div className='desktop:hidden laptop:hidden text-[23px] text-[#B85C38] hover:text-[#5C3D2E] cursor-pointer'>
                        <div onClick={() => { setShowMenu(value => !value) }}>
                            {(showMenu) ? <ion-icon name="menu-sharp"></ion-icon> : <ion-icon name="close-sharp"></ion-icon>}  
                        </div>
                    </div>
                </div>
            </div>
            <div className={`flex justify-center items-center ${(showMenu) ? 'hidden':'block'} pr-3 pb-3`}>
                <ul className='text-[15px] text-[#5C3D2E] font-poppins flex flex-col justify-center items-center space-y-2 cursor-pointer'>
                    {menu.map(items => {
                        return(
                            <li key={items.id} className='hover:text-[#B85C38] duration-300'>
                                <Link to={items.link} smooth={true} duration={400} onClick={() => { setShowMenu(value => !value) }}>
                                    {items.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={`flex justify-center items-center pr-3 pb-3 ${(showMenu) ? 'hidden':'block'}`}>
                <button className='rounded px-10 py-2 bg-[#B85C38] hover:bg-[#5C3D2E] text-[#E0C097] text-[14px] font-poppins'>Download CV</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar