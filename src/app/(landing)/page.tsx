import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Security from './components/Security/Security';
import OurTeam from './components/OurTeam/OurTeam';
import JoinCommunity from './components/JoinCommunity/JoinCommunity';
import SectionSeparator from '@/src/components/layout/SectionSeparator/SectionSeparator';
import Wrapper from '@/src/components/layout/Wrapper/Wrapper';

export default function LandingPage() {
  return (
    <>
      <Header />

      <Wrapper>
        <main>
          <Hero />

          <Features />
          <SectionSeparator />

          <Security />
          <SectionSeparator />

          <OurTeam />
          <JoinCommunity />
        </main>
      </Wrapper>

      <Footer />
    </>
  );
}
