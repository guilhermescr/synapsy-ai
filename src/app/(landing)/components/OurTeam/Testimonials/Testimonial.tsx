import Image from 'next/image';
import { TestimonialType } from './TestimonialsCarousel';
import { toPossessive } from '@/src/utils/stringUtils';
import TestimonialGradient1 from '@/public/images/testimonials/testimonial-gradient-1.png';
import TestimonialGradient2 from '@/public/images/testimonials/testimonial-gradient-2.png';
import TestimonialGradient3 from '@/public/images/testimonials/testimonial-gradient-3.png';

function QuoteIcon() {
  return (
    <svg
      className="select-none pointer-events-none"
      width="57"
      height="41"
      viewBox="0 0 57 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.0283 15.6342C25.0283 6.06226 19.5382 0 11.949 0C4.84419 0 0 4.94553 0 11.965C0 18.9844 4.68272 22.9728 10.4958 22.9728C12.272 22.9728 13.7252 22.6537 15.017 22.1751C15.017 27.7588 10.0113 32.0661 3.06799 33.3424V41C15.9858 39.4047 25.0283 29.035 25.0283 15.6342ZM57 15.6342C57 6.06226 51.5099 0 43.9207 0C36.8159 0 31.9717 4.94553 31.9717 11.965C31.9717 18.9844 36.4929 22.9728 42.306 22.9728C44.0822 22.9728 45.5354 22.6537 46.8272 22.1751C46.8272 27.7588 41.983 32.0661 35.0397 33.3424V41C47.9575 39.4047 57 29.035 57 15.6342Z"
        fill="white"
        fillOpacity="0.16"
      />
    </svg>
  );
}

interface TestimonialProps {
  testimonial: TestimonialType;
  index: number;
}

export default function Testimonial({ testimonial, index }: TestimonialProps) {
  const testimonialGradients = [
    TestimonialGradient1,
    TestimonialGradient2,
    TestimonialGradient3,
  ];

  return (
    <article className="rounded-md h-full max-w-sm relative pb-5">
      <div className="bg-header border border-icon rounded-md p-6 mx-4">
        <div className="flex items-center gap-2 mb-5">
          <Image
            className="rounded-md"
            src={testimonial.profilePicture}
            alt={`${toPossessive(testimonial.name)} profile picture`}
            height={35}
            width={35}
          />

          <div className="flex flex-col items-start mr-auto">
            <h3>{testimonial.name}</h3>
            <p className="text-sm text-muted">{testimonial.profession}</p>
          </div>

          <QuoteIcon />
        </div>

        <p className="max-w-xs">{testimonial.testimonial}</p>
      </div>

      <Image
        className="absolute bottom-0 right-0 -z-1"
        src={testimonialGradients[index % testimonialGradients.length]}
        alt={`Testimonial Gradient ${index + 1}`}
      />
    </article>
  );
}
