import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-white'>
        <div className='container mx-auto'>
            <div className='min-h-screen flex justify-center items-center'>
                <form action='https://getform.io/f/627036ad-5d7f-4098-86da-a872ee7a4629' method='POST'>
                    <div className='relative rounded mobile:w-[350px] w-[600px] h-[450px] bg-[#E0C097] shadow-lg'>
                        <div className='w-full h-[50px] bg-[#B85C38] flex justify-center items-center rounded-t'>
                            <span className='text-[16px] text-[#E0C097] font-poppins font-semibold'>Send Me A Message</span>
                        </div>
                        <div className='w-full h-[35px] mt-10 px-10'>
                            <input type='text' name='name' placeholder='Name' className='w-full h-full px-2 outline-none text-[15px] font-poppins rounded' />
                        </div>
                        <div className='w-full h-[35px] mt-2 px-10'>
                            <input type='email' name='email' placeholder='example@email.com' className='w-full h-full px-2 outline-none text-[15px] font-poppins rounded' />
                        </div>
                        <div className='w-full h-[35px] mt-2 px-10'>
                            <textarea name='message' className='w-full outline-none text-[15px] font-poppins p-2 rounded resize-none' rows={7} placeholder='Message'>
                            </textarea>
                        </div>
                        <div className='w-full h-[80px] absolute bottom-0 flex justify-center items-center'>
                            <button type='Submit' className='px-12 py-2 rounded bg-[#B85C38] hover:bg-[#5C3D2E] text-[#E0C097]'>Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact