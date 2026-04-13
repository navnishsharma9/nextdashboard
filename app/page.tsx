import Navbar from '@/app/ui/landing/Navbar';
import Hero from '@/app/ui/landing/Hero';
import Services from '@/app/ui/landing/Services';
import Portfolio from '@/app/ui/landing/Portfolio';
import Team from '@/app/ui/landing/Team';
import About from '@/app/ui/landing/About';
import CTA from '@/app/ui/landing/CTA';
import Contact from '@/app/ui/landing/Contact';
import Footer from '@/app/ui/landing/Footer';
import ChatBot from '@/app/ui/landing/ChatBot';

export default function Page() {
  return (
    <main className="bg-gray-950 text-gray-100 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Team />
      <About />
      <CTA />
      <Contact />
      <Footer />
      <ChatBot />
    </main>
  );
}

