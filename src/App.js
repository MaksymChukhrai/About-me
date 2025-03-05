import React from 'react';
import './index.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import ChooseMe from './components/ChooseMe/ChooseMe';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App" >

      <Header />
      <main>
        <Hero />
        <div className='background-skills'>
        <AboutMe />
        <Skills />
        </div>
        <ChooseMe />
        <Portfolio />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}

export default App;
