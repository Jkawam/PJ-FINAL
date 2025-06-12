// src/components/DesktopHeader.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function DesktopHeader({ digitalStoreLogoUrl,}) {
  const location = useLocation();
  const currentPath = location.pathname;

  const getNavLinkClasses = (path) => {
    const isActive = currentPath === path || (path === '/' && currentPath === '/');
    return `relative text-lg pt-2 pb-1 group 
            ${isActive ? 'text-pink-600' : 'text-gray-800 hover:text-pink-600'}`;
  };

  const getUnderlineClasses = (path) => {
    const isActive = currentPath === path || (path === '/' && currentPath === '/');
    return `absolute bottom-0 left-0 h-0.5 bg-pink-600 transition-all duration-300
            ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`;
  };

  return (
    <>
      {/* Primeira linha do Header Desktop: Logo, Barra de Pesquisa, Ações do Usuário */}
      {/* <<<<< CORREÇÃO: px-0 mudou para px-4 >>>>>>>>> */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between md:py-4">
        {/* Logo Completo (APENAS Imagem Logo) */}
        <div className="flex items-center">
          <img src={digitalStoreLogoUrl} alt="Digital Store Logo" className="h-8" />
        </div>

        {/* Barra de Pesquisa Desktop */}
        <div className="flex-grow max-w-3xl mx-8 relative">
          <input
            type="text"
            placeholder="Pesquisar produto..."
            className="w-full py-2 px-4 border border-gray-300 bg-gray-100 rounded-md focus:outline-none "
            id="desktop-search"
            name="desktopSearch"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>

        {/* Ações do Usuário Desktop (Cadastre-se, Entrar, Carrinho) */}
        <div className="flex items-center space-x-10">
          <Link to="/cadastro" className="relative text-gray-700 hover:text-pink-600 pt-2 pb-1 group">
            <span className="relative inline-block">
              Cadastre-se
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          <Link to="/entrar" className="bg-pink-600 text-white px-14 py-3 rounded-md hover:bg-pink-700 transition duration-300">Entrar</Link>
          <div className="relative"> {/* Ícone do carrinho Desktop */}
            <Link to="/carrinho" className="text-gray-700 hover:text-pink-600">
              <img src="/assets/mini-cart.svg" alt="Ícone de Carrinho" className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Segunda linha: Links de Navegação (Versão Desktop) */}
      {/* <<<<< CORREÇÃO: bg-gray-100 py-3 border-t border-gray-200 para bg-white py-3 >>>>>>>>> */}
      <nav className="bg-white py-3">
        {/* <<<<< CORREÇÃO: px- para px-4, adicionado font-medium e text-gray-800 >>>>>>>>> */}
        <div className="container mx-auto px-4 flex items-center justify-start text-lg font-medium text-gray-800">
          <div className="flex space-x-10">
            <Link to="/" className={getNavLinkClasses('/')}>
              <span className="relative inline-block">
                  Home
                  <span className={getUnderlineClasses('/')}></span>
              </span>
            </Link>
            <Link to="/produtos" className={getNavLinkClasses('/produtos')}>
              <span className="relative inline-block">
                  Produtos
                  <span className={getUnderlineClasses('/produtos')}></span>
              </span>
            </Link>
            <Link to="/categorias" className={getNavLinkClasses('/categorias')}>
              <span className="relative inline-block">
                  Categorias
                  <span className={getUnderlineClasses('/categorias')}></span>
              </span>
            </Link>
            <Link to="/meus-pedidos" className={getNavLinkClasses('/meus-pedidos')}>
              <span className="relative inline-block">
                  Meus Pedidos
                  <span className={getUnderlineClasses('/meus-pedidos')}></span>
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default DesktopHeader;