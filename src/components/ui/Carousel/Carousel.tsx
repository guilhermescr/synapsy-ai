'use client';

import { ReactNode, useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import CarouselButton from './CarouselButton';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';

interface CarouselProps<T> {
  uniqueKey: string;
  items: T[];
  renderItem: (item: T, index: number, isSelected: boolean) => ReactNode;
  className?: string;
  itemsToShow?: number;
  infinite?: boolean;
}

export default function Carousel<T>({
  uniqueKey,
  items,
  renderItem,
  className = '',
  itemsToShow = 3,
  infinite = false,
}: CarouselProps<T>) {
  const sliderRef = useRef<Slider | null>(null);

  const [slidesToShow, setSlidesToShow] = useState(itemsToShow);

  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(
    !infinite && items.length <= slidesToShow
  );

  const handleBackClick = () => sliderRef.current?.slickPrev();
  const handleNextClick = () => sliderRef.current?.slickNext();

  const updateButtonStates = useCallback(
    (current: number) => {
      if (!infinite) {
        setIsPrevDisabled(current === 0);
        setIsNextDisabled(current >= items.length - slidesToShow);
      }
    },
    [infinite, items.length, slidesToShow]
  );

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(itemsToShow);
      }
    };

    updateSlides();
    window.addEventListener('resize', updateSlides);

    return () => window.removeEventListener('resize', updateSlides);
  }, [itemsToShow]);

  const settings = {
    dots: false,
    infinite,
    speed: 300,
    slidesToShow: Math.min(slidesToShow, items.length),
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '20px',
    afterChange: (current: number) => updateButtonStates(current),
  };

  return (
    <div className={`w-full ${className}`}>
      <Slider ref={sliderRef} {...settings} className="mt-10">
        {items.map((item, index) => (
          <div key={`${uniqueKey}-item-${index}`}>
            {renderItem(item, index, false)}
          </div>
        ))}
      </Slider>

      <div className="flex justify-center mt-14 space-x-4">
        <CarouselButton
          onClick={handleBackClick}
          disabled={!infinite && isPrevDisabled}
        >
          <ChevronLeft />
        </CarouselButton>

        <CarouselButton
          onClick={handleNextClick}
          disabled={!infinite && isNextDisabled}
        >
          <ChevronRight />
        </CarouselButton>
      </div>
    </div>
  );
}
