import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import Homepage from '../components/Homepage';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import { useAnimation, useInView, motion } from 'framer-motion';
import About from '../components/About';
import Plan from '../components/Plan';

export default function Home() {
  const [navBg, setNavBg] = useState(false);

  const [selectedMenu, setSelectedMenu] = useState('home');
  const ref = useRef(null);
  const isInView = useInView(ref);

  const animate = useAnimation();
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    console.log(scrollY);
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 75) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }

    if (isInView) {
      setSelectedMenu('home');
    } else if (window.scrollY > 400 && window.scrollY < 650) {
      setSelectedMenu('about');
    } else if (window.scrollY > 650 && window.scrollY < 800) {
      setSelectedMenu('items');
    } else if (window.scrollY > 800 && window.scrollY < 1500) {
      setSelectedMenu('challenges');
    } else {
      setSelectedMenu('');
    }
  };

  return (
    <div className=" overflow-hidden min-h-screen">
      <Head>
        <title>GDSC Halloween</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Butcherman&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat+Brush&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <header
        className={`z-30 fixed top-0 transition-all left-0 right-0 ${
          navBg && ' bg-[#000000cd]'
        }
        `}
      >
        <Navbar selectedMenu={selectedMenu} />
      </header>
      <main className="bg-grey">
        <Section>
          <Homepage />
        </Section>
        <Section>
          <About />
        </Section>
        <Section>
          <Plan />
        </Section>
      </main>
      <div></div>
    </div>
  );
}
