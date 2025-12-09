import TestimonialsCarousel from './TestimonialsCarousel';

export default function Testimonials() {
  return (
    <section className="min-h-screen flex flex-col gap-5 items-center justify-center py-8">
      <p className="font-semibold text-white text-5xl">What our clients say</p>

      <p className="max-w-lg text-center mb-10">
        See how our team has helped clients achieve their goals with innovative
        solutions and personalized support.
      </p>

      <TestimonialsCarousel />
    </section>
  );
}
