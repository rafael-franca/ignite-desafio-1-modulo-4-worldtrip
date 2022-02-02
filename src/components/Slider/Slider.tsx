import { ReactNode } from "react";
import { Swiper } from 'swiper/react';

import 'swiper/css';

type SliderProps = {
    children: ReactNode
}

export function Slider({ children }: SliderProps) {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {children}
        </Swiper>
    )
}