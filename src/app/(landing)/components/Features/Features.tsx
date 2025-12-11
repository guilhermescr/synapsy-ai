import Button from '@/src/components/ui/Button';
import { ChevronRight, Cpu, Network, PanelsTopLeft } from 'lucide-react';
import Integrations from './Integrations';

export default function Features() {
  return (
    <>
      <section
        className="min-h-screen flex flex-col gap-5 items-center justify-center text-center py-8"
        id="features"
      >
        <h2 className="text-primary text-sm uppercase font-medium tracking-[0.25rem]">
          Features
        </h2>

        <p className="font-semibold text-white text-5xl">
          Discover the Tools that Drive Success
        </p>

        <p>
          Unleash innovation and accelerate growth with our dynamic product.
        </p>

        <section className="relative bg-header rounded-2xl flex flex-col lg:flex-row items-start gap-8 mt-8 py-10 md:p-20 features-cards">
          <div className="flex flex-col items-center gap-4 lg:px-2">
            <Cpu className="text-icon" size={32} />
            <h3 className="font-medium tracking-wide text-lg">
              Cutting-Edge Innovation
            </h3>

            <p className="tracking-wide px-5">
              Experience groundbreaking technological advancements that push the
              boundaries of what's possible, revolutionizing industries and
              transforming the way we live and work.
            </p>
          </div>

          <div className="bg-gray-100/25 h-px w-3/4 lg:h-50 lg:w-px m-auto" />

          <div className="flex flex-col items-center gap-4 lg:px-2">
            <Network className="text-icon" size={32} />
            <h3 className="font-medium tracking-wide text-lg">
              Seamless Connectivity
            </h3>

            <p className="tracking-wide px-5">
              Stay connected anytime, anywhere with our robust and reliable
              network infrastructure, ensuring uninterrupted communication and
              effortless access to the digital world.
            </p>
          </div>

          <div className="bg-gray-100/25 h-px w-3/4 lg:h-50 lg:w-px m-auto" />

          <div className="flex flex-col items-center gap-4 lg:px-3">
            <PanelsTopLeft className="text-icon" size={32} />
            <h3 className="font-medium tracking-wide text-lg">
              Intuitive User Interface
            </h3>

            <p className="tracking-wide px-5">
              Enjoy a seamless and intuitive user experience with our sleek and
              user-friendly interface, designed to simplify complex tasks and
              enhance productivity.
            </p>
          </div>
        </section>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <Button size="large">Contact Us</Button>

          <Button variant="ghost">
            View All <ChevronRight size={18} />
          </Button>
        </div>
      </section>

      <Integrations />
    </>
  );
}
