import { ReactNode, Children } from 'react'
import { Slider as SliderComponent } from './Slider'
import { SliderItem } from './SliderItem'

type SlideProps = {
    children: ReactNode
}

export function Slide({ children }: SlideProps) {
    const items = Children.toArray(children)

    return (
        <SliderComponent>
            {items.map((item, index) => (
                <SliderItem key={index}>
                    {item}
                </SliderItem>
            ))}
        </SliderComponent>
    )
}