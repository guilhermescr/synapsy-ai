import Image from 'next/image';
import Button from '@/src/components/ui/Button';
import IntegrationsIllustration from '@/public/images/integrations-illustration.png';

export default function Integrations() {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row gap-10 items-center justify-center md:justify-between py-8 px-4">
      <div className="flex flex-col items-start gap-4">
        <h2 className="text-primary text-sm uppercase font-medium tracking-[0.25rem]">
          Integrations
        </h2>

        <p className="font-bold text-white text-4xl max-w-90">
          Unified view of your customers
        </p>

        <div className="font-light text-lg tracking-wide">
          <p className="mb-1">
            Enterpret will integrate directly with any feedback channel.
          </p>
          <p>Take advantage of our CSV importer or API</p>
        </div>

        <Button size="large">View all Integrations</Button>
      </div>

      <div className="relative h-70 w-full md:h-120 md:w-120">
        <Image
          src={IntegrationsIllustration}
          alt="Integrations Illustration"
          objectFit="contain"
          fill
        />
      </div>
    </section>
  );
}
