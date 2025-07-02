import React from 'react';

function NotFound() {
  return (
    // Removido 'w-screen' e 'h-screen' para evitar problemas de overflow
    // 'min-h-screen' garante que o container ocupe a altura da tela, o que é ideal para centralização vertical
    <div className="min-h-screen flex flex-col justify-center items-center text-gray-700 px-4 text-center">
      <h1 className="text-9xl font-bold text-pink-600">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Desculpe, página não encontrada
      </h2>
      <p className="text-sm md:text-base text-gray-500 mb-6">
        A página que você está procurando não existe ou foi movida.
      </p>
      {/* Opcional: Adicionar um botão para voltar para a Home */}
      {/* <Link to="/" className="bg-pink-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-pink-700 transition">
        Voltar para a Home
      </Link>
      */}
    </div>
  );
}

export default NotFound;