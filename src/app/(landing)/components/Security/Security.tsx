import Button from '@/src/components/ui/Button';
import './security.css';
import Image from 'next/image';
import SecurityIllustration from '@/public/images/security-illustration.png';

export default function Security() {
  return (
    <section
      className="min-h-screen flex flex-col-reverse md:flex-row-reverse gap-10 items-center justify-center md:justify-between py-8 px-4"
      id="security"
    >
      <div className="flex flex-col items-start gap-4">
        <h2 className="text-primary text-sm uppercase font-medium tracking-[0.25rem]">
          Security
        </h2>

        <p className="font-bold text-white text-4xl max-w-140">
          Built for scale and enterprise level security
        </p>

        <p className="font-light text-lg tracking-wide max-w-125">
          SOC-2 Type II certification, penetration tested, and regular
          vulnerability scans. Hosted behind a VPC. Data encryption at rest and
          transit.
        </p>

        <Button size="large" className="mt-5">
          Learn More
        </Button>
      </div>

      <div className="relative h-70 w-full md:h-100 md:w-120 md:mb-20">
        <Image
          className="object-contain"
          src={SecurityIllustration}
          alt="Integrations Illustration"
          fill
          sizes="(max-width: 768px) 100vw"
        />
      </div>
    </section>
  );
}
