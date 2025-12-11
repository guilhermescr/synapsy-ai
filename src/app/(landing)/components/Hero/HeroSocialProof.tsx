import Wrapper from '@/src/components/layout/Wrapper/Wrapper';
import Image from 'next/image';
import WalmartLogo from '@/public/images/logos/social-proof/walmart-logo.svg';
import AmazonLogo from '@/public/images/logos/social-proof/amazon-logo.png';
import AliexpressLogo from '@/public/images/logos/social-proof/aliexpress-logo.png';
import EbayLogo from '@/public/images/logos/social-proof/ebay-logo.png';
import AppleLogo from '@/public/images/logos/social-proof/apple-logo.png';
import SamsungLogo from '@/public/images/logos/social-proof/samsung-logo.svg';
import NikeLogo from '@/public/images/logos/social-proof/nike-logo.png';
import LGLogo from '@/public/images/logos/social-proof/lg-logo.png';
import XiaomiLogo from '@/public/images/logos/social-proof/xiaomi-logo.png';
import AsusLogo from '@/public/images/logos/social-proof/asus-logo.png';
import DellLogo from '@/public/images/logos/social-proof/dell-logo.png';
import LenovoLogo from '@/public/images/logos/social-proof/lenovo-logo.png';
import './hero-social-proof.css';

export default function HeroSocialProof() {
  const logos = [
    WalmartLogo,
    AmazonLogo,
    AliexpressLogo,
    EbayLogo,
    AppleLogo,
    LenovoLogo,
    SamsungLogo,
    NikeLogo,
    DellLogo,
    LGLogo,
    XiaomiLogo,
    AsusLogo,
  ];

  return (
    <section className="mt-auto text-center w-full bg-linear-to-b from-surface/5 to-surface to-15%">
      <p className="uppercase tracking-widest font-inter pt-12 pb-6 px-2">
        Trusted by companies in 100+ countries around the globe.
      </p>

      <div className="bg-background overflow-hidden mb-6">
        <Wrapper className="relative w-full">
          <div className="flex justify-between gap-20 animate-scroll py-4">
            {[...logos, ...logos].map((logo, index) => (
              <Image
                key={`${logo.src}-${index}`}
                src={logo.src}
                alt={`Logo ${index + 1}`}
                width={120}
                height={60}
                className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity object-contain grayscale hover:grayscale-0"
                priority
              />
            ))}
          </div>
        </Wrapper>
      </div>
    </section>
  );
}
