import Header from '@/src/components/layout/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Security from './components/Security/Security';
import Footer from '@/src/components/layout/Footer';
import JoinCommunity from './components/JoinCommunity/JoinCommunity';

export default function LandingPage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Features />
        <Security />
        <JoinCommunity />
      </main>

      <Footer />
    </>
  );
}
