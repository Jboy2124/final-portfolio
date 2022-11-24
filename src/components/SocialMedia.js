import React from 'react'

const SocialMedia = ({ key, name, iconName }) => {
  return (
    <div key={key} className='flex justify-end w-[125px] ml-[-85px] hover:ml-[-10px] items-center duration-500 hover:bg-pink-600 rounded-r group'>
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