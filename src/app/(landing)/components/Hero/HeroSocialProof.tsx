import Image from 'next/image';

export default function HeroSocialProof() {
  const logos = [
    '/images/logos/social-proof/walmart-logo.png',
    '/images/logos/social-proof/amazon-logo.png',
    '/images/logos/social-proof/aliexpress-logo.png',
    '/images/logos/social-proof/ebay-logo.png',
    '/images/logos/social-proof/apple-logo.png',
    '/images/logos/social-proof/samsung-logo.png',
    '/images/logos/social-proof/nike-logo.png',
    '/images/logos/social-proof/lg-logo.webp',
  ];

  return (
    <section className="mt-auto text-center">
      <p className="uppercase tracking-widest font-inter mb-6">
        Trusted by companies in 100+ countries around the globe.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            width={120}
            height={60}
            className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity object-contain"
            priority
          />
        ))}
      </div>
    </section>
  );
}
