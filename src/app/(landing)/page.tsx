import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Security from './components/Security/Security';
import OurTeam from './components/OurTeam/OurTeam';
import JoinCommunity from './components/JoinCommunity/JoinCommunity';

export default function LandingPage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Features />
        <Security />
        <OurTeam />
        <JoinCommunity />
      </main>

      <Footer />
    </>
  );
}
