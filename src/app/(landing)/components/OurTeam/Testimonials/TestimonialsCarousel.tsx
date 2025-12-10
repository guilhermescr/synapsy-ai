'use client';

import { useEffect, useRef, useState } from 'react';
import Testimonial from './Testimonial';
import CarouselButton from '@/src/components/ui/Carousel/CarouselButton';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export type TestimonialType = {
  profilePicture: string;
  name: string;
  profession: string;
  testimonial: string;
};

export default function TestimonialsCarousel() {
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollAmount = () => {
    if (carouselRef.current) {
      return carouselRef.current.offsetWidth / 2;
    }
    return 0;
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -scrollAmount(),
        behavior: 'smooth',
      });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: scrollAmount(),
        behavior: 'smooth',
      });
    }
  };

  const updateScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (carouselRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;

    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const fetchTestimonials = async () => {
      const data = [
        {
          profilePicture: `/images/testimonials/testimonial-person-1.png`,
          name: 'Cameron Williamson',
          profession: 'Web Designer',
          testimonial:
            'Synapsy transformed our online presence with a stunning website that truly reflects our brand. Their team was professional, creative, and easy to work with. Highly recommend!',
        },
        {
          profilePicture: `/images/testimonials/testimonial-person-2.png`,
          name: 'Esther Howard',
          profession: 'Web Developer',
          testimonial:
            'Working with Synapsy was a game-changer for our business. Their innovative solutions and strategic approach helped us reach new heights. The results speak for themselves!',
        },
        {
          profilePicture: `/images/testimonials/testimonial-person-3.png`,
          name: 'Jenny Wilson',
          profession: 'UI/UX Designer',
          testimonial:
            "Synapsy exceeded our expectations in every way. Their attention to detail, creativity, and dedication to our project were outstanding. We couldn't be happier with the outcome!",
        },
      ];

      setTestimonials(data);
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      carousel.addEventListener('scroll', updateScrollButtons);

      return () => {
        carousel.removeEventListener('scroll', updateScrollButtons);
      };
    }
  }, []);

  useEffect(() => {
    updateScrollButtons();
  }, [testimonials]);

  useEffect(() => {
    const handleResize = () => {
      updateScrollButtons();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-10 w-full">
      <div
        className="relative max-w-full overflow-hidden cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div
          ref={carouselRef}
          className="flex overflow-x-auto no-scrollbar scroll-smooth"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="shrink-0 w-full max-w-sm px-4">
              <Testimonial testimonial={testimonial} index={index} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10 space-x-4">
        <CarouselButton onClick={handlePrev} disabled={isAtStart}>
          <ChevronLeft />
        </CarouselButton>

        <CarouselButton onClick={handleNext} disabled={isAtEnd}>
          <ChevronRight />
        </CarouselButton>
      </div>
    </section>
  );
}
