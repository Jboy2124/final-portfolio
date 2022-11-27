import React from 'react'
// import SkillsCard from '../cards/SkillsCard'
// import { skills } from '../utils/skills-utils'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CardCarousel = () => {
  return (
    <Carousel className='bg-green-200 h-[400px]' showArrows={true} width={400} he showThumbs={false} autoPlay={true} interval={2000} infiniteLoop={true} dynamicHeight={true}>
        <div>
            <span>1</span>
        </div>
        <div>
            <span>2</span>
        </div>
        <div>
            <span>3</span>
        </div>
    </Carousel>
  )
}

export default CardCarousel