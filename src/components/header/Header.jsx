import React from 'react';
import { useNavigate } from 'react-router-dom';
import hero from '../../assets/images/hero.jpg';
import { BlueButton } from '../buttons/index';

const Hero = function Hero() {
  const navigate = useNavigate();
  /**
   * Fonction pour accéder à la page pour voir tous les livres
   */
  const handleAllBooks = () => {
    navigate('/allbooks');
  };
  return (
    <div
      className="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center "
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="text-center">
        <h1 className="text-7xl tracking-tight leading-10 sm:text-7xl text-indigo-600 font-bold sm:leading-none md:text-8xl">
          My library
        </h1>
        <p className=" text-white font-medium sm:mt-5 sm:text-2xl sm:max-w-xl sm:mx-auto md:mt-20 md:text-3xl">
          Welcome to{' '}
          <span className="text-indigo-600"> &rdquo;My Library&rdquo; </span>,
          The site that allows you to follow your reading.
        </p>
        <div className="mx-auto mt-5 md:mt-10 w-48">
          {' '}
          <BlueButton text="Enter" onClick={handleAllBooks} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
