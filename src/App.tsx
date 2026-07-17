import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Problem from './components/Problem';
import InteractiveStory from './components/InteractiveStory';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import GooglePayExperience from './components/GooglePayExperience';
import Security from './components/Security';
import Providers from './components/Providers';
import UseCases from './components/UseCases';
import DashboardMockup from './components/DashboardMockup';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-electric selection:text-white antialiased overflow-x-hidden font-sans">
      {/* Navbar */}
      <Navbar onJoinWaitlist={openWaitlist} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onJoinWaitlist={openWaitlist} />

        {/* Target Audience Trust Band */}
        <Trust />

        {/* Interactive Google Pay wallet simulation */}
        <div id="product-demo" className="scroll-mt-20">
          <GooglePayExperience />
        </div>

        {/* Problem space cards */}
        <Problem />

        {/* How It Works step grid */}
        <HowItWorks />

        {/* Interactive story workflow */}
        <InteractiveStory />

        {/* Feature listings */}
        <Features />

        {/* Unified provider network nodes */}
        <Providers />

        {/* Dashboard mockup representation */}
        <DashboardMockup />

        {/* Security detail card */}
        <Security />

        {/* Use Cases grids */}
        <UseCases />

        {/* Comparison grid */}
        <Comparison />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ Accordions */}
        <FAQ />

        {/* Final call to action box */}
        <FinalCTA onJoinWaitlist={openWaitlist} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Waitlist Modal popup */}
      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </div>
  );
}

export default App;
