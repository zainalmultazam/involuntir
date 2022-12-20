import React from 'react'
import Carousel, { CarouselItem } from './Carousel'

export default function CarouselMain() {
  return (
    <Carousel>
      <CarouselItem>
        <a href="/">
          <img src="./images/images_carousel/slide-1.png" alt="" />
        </a>
      </CarouselItem>
    </Carousel>
  )
}
