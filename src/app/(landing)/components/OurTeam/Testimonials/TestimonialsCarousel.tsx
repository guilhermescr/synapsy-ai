'use client';

import { useState } from 'react';
import Testimonial from './Testimonial';
import Carousel from '@/src/components/ui/Carousel/Carousel';

export type TestimonialType = {
  id: string;
  profilePicture: string;
  name: string;
  profession: string;
  testimonial: string;
};

const generateTestimonials = (): TestimonialType[] => {
  const peopleMock = [
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

  return peopleMock.map((person, i) => ({
    id: `testimonial-${i}`,
    ...person,
  }));
};

export default function TestimonialsCarousel() {
  const [testimonials] = useState<TestimonialType[]>(generateTestimonials());
  const itemsToShow = 3;

  return (
    <Carousel
      uniqueKey="testimonials-carousel"
      items={testimonials}
      renderItem={(testimonial, index) => (
        <Testimonial testimonial={testimonial} index={index} />
      )}
      itemsToShow={itemsToShow}
      infinite={testimonials.length > itemsToShow}
    />
  );
}
