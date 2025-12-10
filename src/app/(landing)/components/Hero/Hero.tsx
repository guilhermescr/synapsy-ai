import Button from '@/src/components/ui/Button';
import { MoveRight } from 'lucide-react';
import HeroSocialProof from './HeroSocialProof';

export default function Hero() {
  return (
    <>
      <section className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center pb-10">
        <div className="mt-auto flex flex-col items-center">
          <h2 className="text-foreground text-3xl font-bold">
            Unlock AI-Powered Insights to Drive{' '}
            <span>Business Decisions Today</span>
          </h2>

          <p className="text-center max-w-3xl my-6">
            Transform your data into actionable intelligence with our AI-driven
            SaaS, designed to optimize efficiency, automate workflows, and
            provide predictive insights for informed decision-making.
          </p>

          <div className="flex items-center justify-between gap-6 w-max">
            <Button>Book a Demo</Button>

            <Button>
              Take Product Tour <MoveRight size={16} />
            </Button>
          </div>
        </div>

        <HeroSocialProof />
      </section>
    </>
  );
}
