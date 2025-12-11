import Testimonials from './Testimonials/Testimonials';
import TeamCarousel from './TeamCarousel';

export default function OurTeam() {
  return (
    <>
      <section className="min-h-screen flex flex-col gap-5 items-center justify-center text-center py-8">
        <h2 className="font-semibold text-white text-5xl">Meet our team</h2>

        <p className="max-w-3xl">
          Meet our passionate and talented team, committed to delivering
          exceptional results, driving innovation, and transforming your vision
          into reality.
        </p>

        <TeamCarousel />
      </section>

      <Testimonials />
    </>
  );
}
