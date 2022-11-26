import React from 'react'

const SocialMedia = ({ key, name, iconName }) => {
  return (
    <div key={key} className='flex justify-end w-[125px] ml-[-85px] hover:ml-[-10px] items-center duration-500 hover:bg-gradient-to-br from-[#2D2424] to-[#5C3D2E] rounded-r group'>
        <div className='flex justify-start items-center'>
            <div className='flex justify-center items-center h-[40px]'>
                <span className='text-[14px] text-[#E0C097] font-poppins font-semibold'>{name}</span>
            </div>
            <div className='flex justify-end items-center'>
                <div className='w-[40px] text-[#B85C38] flex justify-center items-center group-hover:text-[#E0C097]'>
                    <ion-icon size='large' name={iconName}></ion-icon>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SocialMedia