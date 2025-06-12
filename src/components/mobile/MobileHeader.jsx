// src/components/MobileHeader.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MobileHeader({ digitalStoreLogoUrl }) { // userProfileImageUrl não é usado aqui
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMobileSearchActive) {
      setIsMobileSearchActive(false);
    }
  };

  const toggleMobileSearch = () => {
    setIsMobileSearchActive(!isMobileSearchActive);
  };

  return (
    <>
      {/* Primeira linha do Header Mobile: Hamburguer, Logo, Lupa, Carrinho */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Lado Esquerdo: Hamburguer */}
        <button onClick={toggleMenu} className="text-gray-700 hover:text-pink-600 focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* SEÇÃO CENTRAL (Mobile: APENAS O LOGO, SEMPRE VISÍVEL) */}
        {/* <<<<< CORREÇÃO: Removida a lógica condicional para que o logo sempre apareça >>>>>>>>> */}
        <div className="flex-grow flex items-center justify-center">
          <img src={digitalStoreLogoUrl} alt="Digital Store Logo" className="h-8" />
        </div>

        {/* Lado Direito: Lupa e Carrinho */}
        <div className="flex items-center space-x-4">
          {/* Ícone de Lupa para abrir a pesquisa (este botão agora só controla a linha de baixo) */}
          <button onClick={toggleMobileSearch} className="text-gray-700 hover:text-pink-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path></svg>
          </button>

          {/* Ícone do Carrinho */}
          <div className="relative">
            <Link to="/carrinho" className="text-gray-700 hover:text-pink-600">
              <img src="/assets/mini-cart.svg" alt="Ícone de Carrinho" className="w-6 h-6" />
            </Link>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">2</span>
          </div>
        </div>
      </div>

      {/* Linha da Barra de Pesquisa Mobile (Aparece SOMENTE se isMobileSearchActive for true) */}
      {isMobileSearchActive && (
        <div className="bg-white py-2 px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="w-full py-1.5 pl-10 pr-4 border border-gray-300 bg-gray-100 rounded-md focus:outline-none"
              autoFocus
              id="mobile-search"
              name="mobileSearch"
            />
            {/* Ícone de Lupa dentro do input de pesquisa */}
            <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* BLOCO DO MENU MOBILE (Abre ao clicar no Hamburguer) */}
      <div className={`fixed inset-0 bg-white z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out flex flex-col`}>
        {/* Cabeçalho do Menu Mobile (Logo e botão de fechar) */}
        <div className="p-4 flex justify-between items-center border-b">
          <div className="flex items-center space-x-2">
            <img src={digitalStoreLogoUrl} alt="Digital Store Logo" className="h-8" />
          </div>
          <button onClick={toggleMenu} className="text-gray-700 hover:text-pink-600 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Links e Ações do Menu Mobile */}
        <nav className="flex flex-col p-4 space-y-4 flex-grow">
          {/* Título "Páginas" */}
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Páginas</h2>
          
          <Link to="/" onClick={toggleMenu} className="relative text-gray-800 hover:text-pink-600 text-lg pt-2 pb-1 group">
            <span className="relative inline-block">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          <Link to="/produtos" onClick={toggleMenu} className="relative text-gray-800 hover:text-pink-600 text-lg pt-2 pb-1 group">
            <span className="relative inline-block">
                Produtos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          <Link to="/categorias" onClick={toggleMenu} className="relative text-gray-800 hover:text-pink-600 text-lg pt-2 pb-1 group">
            <span className="relative inline-block">
                Categorias
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          <Link to="/meus-pedidos" onClick={toggleMenu} className="relative text-gray-800 hover:text-pink-600 text-lg pt-2 pb-1 group">
            <span className="relative inline-block">
                Meus Pedidos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          
          <div className="pt-4 border-t mt-auto flex flex-col space-y-2">
            <Link to="/entrar" onClick={toggleMenu} className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 text-center w-full border-2 border-dashed border-transparent hover:border-pink-600">Entrar</Link>
            <Link to="/cadastro" onClick={toggleMenu} className="relative text-gray-700 hover:text-pink-600 py-2 text-center w-full group">
              <span className="relative inline-block">
                Cadastre-se
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default MobileHeader;