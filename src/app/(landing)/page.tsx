import Header from '@/src/components/layout/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';

export default function LandingPage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Features />
      </main>

      <footer></footer>
    </>
  );
}
