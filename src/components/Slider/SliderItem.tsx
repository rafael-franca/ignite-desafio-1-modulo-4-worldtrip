import { Box, Heading, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { SwiperSlide } from 'swiper/react';

type SliderItemProps = {
    children: ReactNode
}

export function SliderItem({ children }: SliderItemProps) {
    return (
        <SwiperSlide>
            {children}
        </SwiperSlide>
    )
}