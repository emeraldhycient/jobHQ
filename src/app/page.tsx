'use client'
import { useLayoutEffect } from 'react';
import Header from '@/components/landing_page/header';
import { useTheme } from "next-themes"
import { FaSun, FaMoon, FaLaptopCode, FaGraduationCap, FaSuitcase, FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import HeroSection from '@/components/landing_page/hero';

const Home = () => {
  const { setTheme } = useTheme()


  useLayoutEffect(() => {
    setTheme("dark")
  }, [])

  return (
    <div className="">
      <Header />
      <HeroSection/>
    </div>
  );
};

export default Home;
