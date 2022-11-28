import React from 'react'
import WorkExpCard from '../cards/WorkExpCard'
import { workExp } from '../utils/work-utils'
import Slider from 'react-slick'


const WorkExperience = () => {

  const settings = {
      dots: true,
      infinite: false,
      autoplay: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow:2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  }

  return (
    <div name='work-experience' className='min-h-screen'>       
        <div className='container mx-auto'>
          <div className='min-h-[80vh]'>
              <div className='py-40'>
              <h2 className='text-center py-10 text-[20px] text-[#5C3D2E] font-poppins font-bold'>WORK EXPERIENCE</h2>
                <Slider {...settings}>
                    {workExp.map(items => {
                        return(
                            <div key={items.id} className='py-5'>
                                <WorkExpCard 
                                    image={items.image}
                                    company={items.company}
                                    position={items.position}
                                    employment={items.employment}
                                          />
                            </div>
                        )
                      })}
                  </Slider>
              </div>
          </div>
        </div>
    </div>
    
  )
}

export default WorkExperience