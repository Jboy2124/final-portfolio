import React from 'react'

const SocialMedia = ({ name, iconName }) => {
  return (
    <div className='h-[40px] w-[40px] hover:w-[120px] flex justify-end items-center duration-500 hover:bg-pink-600 group rounded-r'>
        <div className='flex justify-start items-center'>
            <div className='flex justify-center items-center h-[40px]'>
                <span className='text-[14px] text-gray-100 font-poppins font-semibold'>{name}</span>
            </div>
            <div className='flex justify-end items-center'>
                <div className='w-[40px] text-primary flex justify-center items-center group-hover:text-white'>
                    <ion-icon size='large' name={iconName}></ion-icon>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SocialMedia