import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm Melanie Lobo
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Full-Stack Developer & Digital Innovator. I create beautiful, functional websites and applications that bring your ideas to life.
        </p>
        <button className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
