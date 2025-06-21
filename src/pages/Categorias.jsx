import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div >
      <div className='w-screen h-screen flex flex-col justify-center items-center  text-gray-700 px-4'>
        <h1 className="text-9xl font-bold text-pink-600">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">Desculpe, página não encontrada</h2>
      <p className="text-sm md:text-base text-gray-500 mb-6">
        A página solicitada não pôde ser encontrada
      </p>
      </div>
    </div>
  );
}

export default NotFound;
