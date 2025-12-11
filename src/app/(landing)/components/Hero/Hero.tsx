import Wrapper from '@/src/components/layout/Wrapper/Wrapper';
import Button from '@/src/components/ui/Button';
import { MoveRight } from 'lucide-react';
import HeroSocialProof from './HeroSocialProof';
import HeroBackground from '@/public/images/layout/hero/hero-background.png';

export default function Hero() {
  return (
    <>
      <section
        className="min-h-[calc(100vh+5rem)] flex flex-col items-center justify-center relative"
        style={{
          background: `var(--color-surface) url(${HeroBackground.src}) no-repeat center center / cover`,
        }}
      >
        <div className="absolute left-1/2 top-[10%] -translate-x-1/2 h-[calc(100vh-14rem)] max-w-7xl w-[90%] bg-[#04041a65] blur-3xl rounded-full" />

        <div className="mt-auto w-full md:py-40">
          <Wrapper className="flex flex-col items-center">
            <h2 className="text-foreground text-4xl md:text-5xl text-center font-bold">
              Unlock AI-Powered Insights to Drive{' '}
              <span className="block py-2 bg-linear-to-r from-primary from-11% to-[#FE7587] bg-clip-text text-transparent">
                Business Decisions Today
              </span>
            </h2>

            <p className="text-center text-lg max-w-4xl my-6">
              Transform your data into actionable intelligence with our
              AI-driven SaaS, designed to optimize efficiency, automate
              workflows, and provide predictive insights for informed
              decision-making.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-max">
              <Button className="w-full md:w-auto">Book a Demo</Button>

              <Button className="w-full md:w-auto">
                Take Product Tour <MoveRight size={16} />
              </Button>
            </div>
          </Wrapper>
        </div>

        <HeroSocialProof />
      </section>
    </>
  );
}
