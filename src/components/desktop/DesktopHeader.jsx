// src/components/DesktopHeader.jsx

import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Importando imagem do produto (simulada para o mini-carrinho)
import tenisImage from '../../assets/images/produtos/produc-image-5-removebg-preview.png';

function DesktopHeader({ digitalStoreLogoUrl }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const [showMiniCart, setShowMiniCart] = useState(false);
  const miniCartRef = useRef(null);

  const simulatedCartItems = [
    {
      id: 1,
      name: 'Tênis Nike Revolution 6 Next Nature Masculino',
      price: 219.0,
      imageUrl: tenisImage,
      quantity: 1,
    },

  ];

  const totalCartValue = simulatedCartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const getNavLinkClasses = (path) => {
    const isActive = currentPath === path || (path === '/' && currentPath === '/');
    return `relative text-lg pt-2 pb-1 group ${
      isActive ? 'text-pink-600' : 'text-gray-800 hover:text-pink-600'
    }`;
  };

  const getUnderlineClasses = (path) => {
    const isActive = currentPath === path || (path === '/' && currentPath === '/');
    return `absolute bottom-0 left-0 h-0.5 bg-pink-600 transition-all duration-300 ${
      isActive ? 'w-full' : 'w-0 group-hover:w-full'
    }`;
  };

  const toggleMiniCart = () => {
    setShowMiniCart(!showMiniCart);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (miniCartRef.current && !miniCartRef.current.contains(event.target)) {
        setShowMiniCart(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Linha 1: Logo, Busca e Ações */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between md:py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={digitalStoreLogoUrl} alt="Digital Store Logo" className="h-8" />
        </div>

        {/* Barra de Pesquisa */}
        <div className="flex-grow max-w-3xl mx-8 relative">
          <input
            type="text"
            placeholder="Pesquisar produto..."
            className="w-full py-2 px-4 border border-gray-300 bg-gray-100 rounded-md focus:outline-none"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>

        {/* Ações: Cadastro, Login, Carrinho */}
        <div className="flex items-center space-x-10">
          <Link to="/cadastro" className="relative text-gray-700 hover:text-pink-600 pt-2 pb-1 group">
            <span className="relative inline-block">
              Cadastre-se
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>

          <Link
            to="/entrar"
            className="bg-pink-600 text-white px-14 py-3 rounded-md hover:bg-pink-700 transition duration-300"
          >
            Entrar
          </Link>

          {/* Carrinho com mini-cart */}
          <div className="relative" ref={miniCartRef}>
            <button onClick={toggleMiniCart} className="text-gray-700 hover:text-pink-600 focus:outline-none">
              <img src="/assets/mini-cart.svg" alt="Ícone de Carrinho" className="w-6 h-6" />
              {simulatedCartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {simulatedCartItems.length}
                </span>
              )}
            </button>

            {/* Mini-carrinho */}
            {showMiniCart && (
              <div className="absolute right-0 mt-3 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
                <h3 className="text-lg font-semibold mb-3">Meu Carrinho</h3>

                <div className="space-y-4">
                  {simulatedCartItems.length === 0 ? (
                    <p className="text-gray-500 text-center">Seu carrinho está vazio.</p>
                  ) : (
                    simulatedCartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-3 border-b pb-2 last:border-b-0 last:pb-0"
                      >
                        <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900 line-clamp-2">{item.name}</p>
                          <p className="text-sm text-gray-600 mt-1">R$ {item.price.toFixed(2)}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {simulatedCartItems.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold">Valor total:</span>
                      <span className="text-lg font-bold text-pink-600">R$ {totalCartValue.toFixed(2)}</span>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Link
                        to="/compraprodutos"
                        className="w-full py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition duration-300 text-center"
                      >
                        Ver Carrinho
                      </Link>
                      <button className="w-full py-2 text-pink-600 border border-pink-600 rounded-md hover:bg-pink-50 transition duration-300">
                        Esvaziar
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Linha 2: Navegação */}
      <nav className="bg-white py-3">
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