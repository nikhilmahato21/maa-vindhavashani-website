import React from 'react';
import { Navigation } from './components/common/Navigation';
import { Footer } from './components/common/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Pricing } from './components/sections/Pricing';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
