'use client';

import Link from 'next/link';
import {
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from '@/src/components/icons/SocialIcons';
import Wrapper from './Wrapper/Wrapper';
import FooterBlurryCircle from '@/public/images/layout/footer/footer-blurry-circle.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <>
      <Wrapper>
        <motion.div
          className="absolute -top-10 left-1/2 -translate-y-1/3 -translate-x-1/2 z-0 w-screen select-none pointer-events-none"
          animate={{
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 3,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        >
          <Image
            src={FooterBlurryCircle}
            alt="Blurry Circle"
            className="h-124 w-full"
          />
        </motion.div>
      </Wrapper>

      <footer className="relative z-9 bg-surface py-6 md:p-20">
        <Wrapper className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Synapsy AI</h2>
            <p className="my-10 text-sm text-foreground/65 tracking-wider">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>

            <div className="flex mt-4 space-x-4">
              <Link href="#" aria-label="Twitter">
                <TwitterIcon color="text-muted hover:text-primary" />
              </Link>

              <Link href="#" aria-label="Facebook">
                <FacebookIcon color="text-muted hover:text-primary" />
              </Link>

              <Link href="#" aria-label="Instagram">
                <InstagramIcon color="text-muted hover:text-primary" />
              </Link>

              <Link href="#" aria-label="LinkedIn">
                <LinkedinIcon color="text-muted hover:text-primary" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm text-foreground/65">Company</h3>
            <ul className="mt-5 space-y-4.5">
              <li>
                <Link href="#" className="text-foreground hover:text-primary">
                  About us
                </Link>
              </li>

              <li>
                <Link href="#" className="text-foreground hover:text-primary">
                  Contact us
                </Link>
              </li>

              <li>
                <Link href="#" className="text-foreground hover:text-primary">
                  Careers
                </Link>
              </li>

              <li>
                <Link href="#" className="text-foreground hover:text-primary">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm text-foreground/65">Product</h3>
            <ul className="mt-5 space-y-4.5">
              <li>
                <Link href="#" className="text-foreground hover:text-primary">
                  Features
                </Link>
              </li>

              <li>
                <Link href="#" className="text-foreground hover:text-primary">
                  Pricing
                </Link>
              </li>

              <li>
                <Link href="#" className="text-foreground hover:text-primary">
                  News
                </Link>
              </li>

              <li>
                <Link href="#" className="text-foreground hover:text-primary">
                  Help desk
                </Link>
              </li>

              <li>
                <Link href="#" className="text-foreground hover:text-primary">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm text-foreground/65">Services</h3>
            <ul className="mt-5 space-y-4.5">
              <li>
                <Link href="#" className="text-foreground hover:text-primary">
                  Digital Marketing
                </Link>
              </li>

              <li>
                <Link href="#" className="text-foreground hover:text-primary">
                  Content Writing
                </Link>
              </li>

              <li>
                <Link href="#" className="text-foreground hover:text-primary">
                  SEO for Business
                </Link>
              </li>

              <li>
                <Link href="#" className="text-foreground hover:text-primary">
                  UI Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm text-foreground/65">Legal</h3>
            <ul className="mt-5 space-y-4.5">
              <li>
                <Link href="#" className="text-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="#" className="text-foreground hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link href="#" className="text-foreground hover:text-primary">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>
        </Wrapper>
      </footer>
    </>
  );
}
