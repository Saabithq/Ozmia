'use client';

import { useRef, useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Contact from './sections/Contact';
import Collection from './sections/Collection';
import Shop from './sections/Shop';

export default function HomePage() {
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const collectionRef = useRef<HTMLElement>(null);
  const shopRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    collection: collectionRef,
    shop: shopRef,
    contact: contactRef,
  };

  const [active, setActive] = useState('hero');

  // Scroll to section when header button is clicked
  const handleNavClick = (id: keyof typeof sectionRefs) => {
    sectionRefs[id]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;
      let current: keyof typeof sectionRefs = 'home';
      for (const id of Object.keys(sectionRefs) as Array<keyof typeof sectionRefs>) {
        const ref = sectionRefs[id];
        if (ref.current) {
          const offsetTop = ref.current.offsetTop;
          if (scrollY >= offsetTop) {
            current = id;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Header onNavClick={handleNavClick} active={active} />
      <main>
        <Home ref={homeRef} />
        <About ref={aboutRef} />
        <Collection ref={collectionRef} />
        <Shop ref={shopRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </div>
  );
}
