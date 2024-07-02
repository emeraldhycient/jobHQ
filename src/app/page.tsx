'use client'
import { useLayoutEffect } from 'react';
import Header from '@/components/landing_page/header';
import { useTheme } from "next-themes"
import { FaSun, FaMoon, FaLaptopCode, FaGraduationCap, FaSuitcase, FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import HeroSection from '@/components/landing_page/hero';
import Section2 from '@/components/landing_page/section2';

const Home = () => {
  const { setTheme } = useTheme()


  useLayoutEffect(() => {
    setTheme("dark")
  }, [])

  return (
    <div className="">
      <Header />
      <HeroSection />
      <Section2/>
    </div>
  );
};

export default Home;
