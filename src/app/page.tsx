'use client'
import { useState } from 'react';
import { FaSun, FaMoon, FaLaptopCode, FaGraduationCap, FaSuitcase, FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''} transition-colors duration-500`}>
      <div className="bg-white dark:bg-blackBg transition-colors duration-500 min-h-screen">
        <header className="py-3 shadow-md transition-colors duration-500">
          <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-lg font-extrabold text-gray-800 dark:text-lightText">JobHQ AI</h1>
            <button
              onClick={toggleDarkMode}
              className="text-gray-800 dark:text-lightText bg-gray-300 dark:bg-gray-600 px-3 py-1 rounded-md transition duration-300 ease-in-out flex items-center"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
              <span className="ml-2 text-sm">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </header>
        <main className="container mx-auto px-4">
          <section className="text-center relative px-4 py-20 bg-gradient-to-b from-blackBg to-darkBg">
            <div className="relative z-10 py-20">
              <h2 className="text-2xl font-extrabold text-lightText mb-4 animate__animated animate__fadeInDown">Welcome to JobConnect AI</h2>
              <p className="text-sm text-grayText mb-6 animate__animated animate__fadeInUp">
                Revolutionizing the job search and interviewy preparation process with AI-powered insights and personalized learning paths.
              </p>
              <p className="text-sm text-grayText mb-8 animate__animated animate__fadeInUp">
                Discover your dream job, prepare like a pro, and learn the skills you need to succeed, all in one place.
              </p>
              <button className="bg-neonGreen text-black px-6 py-3 rounded-full hover:bg-green-400 transition duration-300 ease-in-out transform hover:scale-105 animate__animated animate__bounceIn">
                Get Started
              </button>
            </div>
          </section>

          <section className="mt-20 text-center">
            <h2 className="text-xl font-extrabold text-gray-800 dark:text-lightText mb-8">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-100 dark:bg-cardBg p-6 rounded-md shadow-lg transform transition duration-500 hover:scale-105">
                <FaLaptopCode className="text-3xl text-neonGreen mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800 dark:text-lightText mb-2">AI Interview Preparation</h3>
                <p className="text-xs text-gray-600 dark:text-grayText">Get ready for your interviews with our AI-driven mock interviews and feedback system.</p>
              </div>
              <div className="bg-gray-100 dark:bg-cardBg p-6 rounded-md shadow-lg transform transition duration-500 hover:scale-105">
                <FaGraduationCap className="text-3xl text-neonGreen mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800 dark:text-lightText mb-2">Personalized Learning Paths</h3>
                <p className="text-xs text-gray-600 dark:text-grayText">Receive customized learning paths to help you upskill efficiently.</p>
              </div>
              <div className="bg-gray-100 dark:bg-cardBg p-6 rounded-md shadow-lg transform transition duration-500 hover:scale-105">
                <FaSuitcase className="text-3xl text-neonGreen mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800 dark:text-lightText mb-2">Comprehensive Job Listings</h3>
                <p className="text-xs text-gray-600 dark:text-grayText">Find your ideal job from our extensive list of job postings.</p>
              </div>
            </div>
          </section>

          <section className="mt-20 text-center">
            <h2 className="text-xl font-extrabold text-gray-800 dark:text-lightText mb-8">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-100 dark:bg-cardBg p-6 rounded-md shadow-lg transform transition duration-500 hover:scale-105">
                <p className="text-xs text-gray-800 dark:text-lightText mb-4">"JobConnect AI helped me land my dream job. The AI-powered interview preparation was incredibly helpful!"</p>
                <p className="mt-4 text-xs font-bold text-gray-600 dark:text-grayText">- Jane Doe, Software Engineer</p>
              </div>
              <div className="bg-gray-100 dark:bg-cardBg p-6 rounded-md shadow-lg transform transition duration-500 hover:scale-105">
                <p className="text-xs text-gray-800 dark:text-lightText mb-4">"The personalized learning paths were a game changer. I was able to upskill quickly and efficiently."</p>
                <p className="mt-4 text-xs font-bold text-gray-600 dark:text-grayText">- John Smith, Data Scientist</p>
              </div>
              <div className="bg-gray-100 dark:bg-cardBg p-6 rounded-md shadow-lg transform transition duration-500 hover:scale-105">
                <p className="text-xs text-gray-800 dark:text-lightText mb-4">"As an employer, I found the platform incredibly useful for finding well-prepared candidates."</p>
                <p className="mt-4 text-xs font-bold text-gray-600 dark:text-grayText">- Sarah Lee, HR Manager</p>
              </div>
            </div>
          </section>

          <section className="mt-20 text-center bg-gray-100 dark:bg-darkBg py-16 rounded-md shadow-lg">
            <h2 className="text-xl font-extrabold text-gray-800 dark:text-lightText mb-8">Connect with Us</h2>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-800 dark:text-lightText hover:text-neonGreen transition-colors duration-300">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-800 dark:text-lightText hover:text-neonGreen transition-colors duration-300">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="#" className="text-gray-800 dark:text-lightText hover:text-neonGreen transition-colors duration-300">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-800 dark:text-lightText hover:text-neonGreen transition-colors duration-300">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </section>
        </main>
        <footer className="bg-gray-100 dark:bg-darkBg py-6 text-center shadow-inner transition-colors duration-500">
          <p className="text-xs text-gray-600 dark:text-grayText">&copy; 2024 JobConnect AI. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
