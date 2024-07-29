import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <section id="about">
        <h2>About Us</h2>
        <p>Information about us...</p>
      </section>
      <section id="brands">
        <h2>Brands</h2>
        <p>Details about our brands...</p>
      </section>
      <section id="innovation">
        <h2>Innovation</h2>
        <p>Details about our innovations...</p>
      </section>
      <section id="csr">
        <h2>CSR</h2>
        <p>Details about our CSR activities...</p>
      </section>
      <section id="career">
        <h2>Career</h2>
        <p>Details about career opportunities...</p>
      </section>
      <section id="scholarship">
        <h2>Scholarship</h2>
        <p>Details about our scholarship programs...</p>
      </section>
      <section id="news">
        <h2>News</h2>
        <p>Latest news...</p>
      </section>
      <Services />
      <Footer />
    </div>
  );
}

export default App;
