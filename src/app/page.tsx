'use client'
import { useState } from 'react';
import Image from 'next/image';

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
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-black">
        <header className="bg-gray-100 dark:bg-gray-900 py-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white">JobConnect AI</h1>
            <button
              onClick={toggleDarkMode}
              className="text-gray-800 dark:text-white bg-gray-300 dark:bg-gray-700 px-3 py-2 rounded-lg transition duration-300 ease-in-out"
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </header>
        <main className="container">
          <section
            className="text-center relative px-4 py-20"
            style={{
              backgroundImage: 'url("/pattern.svg"), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
              backgroundBlendMode: 'overlay',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="relative z-10 py-20">
              <h2 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-4">Welcome to JobConnect AI</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Revolutionizing the job search and interview preparation process with AI.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
                Get Started
              </button>
            </div>
          </section>

          <section className="mt-32 text-center">
            <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-12">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">AI Interview Preparation</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">Get ready for your interviews with our AI-driven mock interviews and feedback system.</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Personalized Learning Paths</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">Receive customized learning paths to help you upskill efficiently.</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Comprehensive Job Listings</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">Find your ideal job from our extensive list of job postings.</p>
              </div>
            </div>
          </section>

          <section className="mt-32 text-center">
            <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-12">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <p className="text-xl text-gray-800 dark:text-white mb-4">"JobConnect AI helped me land my dream job. The AI-powered interview preparation was incredibly helpful!"</p>
                <p className="mt-4 text-sm font-bold text-gray-600 dark:text-gray-400">- Jane Doe, Software Engineer</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <p className="text-xl text-gray-800 dark:text-white mb-4">"The personalized learning paths were a game changer. I was able to upskill quickly and efficiently."</p>
                <p className="mt-4 text-sm font-bold text-gray-600 dark:text-gray-400">- John Smith, Data Scientist</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <p className="text-xl text-gray-800 dark:text-white mb-4">"As an employer, I found the platform incredibly useful for finding well-prepared candidates."</p>
                <p className="mt-4 text-sm font-bold text-gray-600 dark:text-gray-400">- Sarah Lee, HR Manager</p>
              </div>
            </div>
          </section>

          <section className="mt-32 text-center bg-gray-100 dark:bg-gray-900 py-20">
            <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-12">Contact Us</h2>
            <form className="max-w-xl mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-800 dark:text-white text-left">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-800 dark:text-white text-left">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-800 dark:text-white text-left">Message</label>
                <textarea id="message" rows="4" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white"></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">Send Message</button>
            </form>
          </section>
        </main>
        <footer className="bg-gray-100 dark:bg-gray-900 py-8 text-center shadow-inner">
          <p className="text-gray-600 dark:text-gray-300">&copy; 2024 JobConnect AI. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
