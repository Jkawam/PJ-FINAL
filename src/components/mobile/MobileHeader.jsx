// src/components/MobileHeader.jsx
import React, { useState, useEffect, useRef } from 'react'; // Importamos useEffect e useRef
import { Link } from 'react-router-dom';

// Importando a imagem do produto (ajuste o caminho se necessário)
import tenisImage from '../../assets/images/produtos/produc-image-5-removebg-preview.png'; 

function MobileHeader({ digitalStoreLogoUrl }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);
  const [showMiniCart, setShowMiniCart] = useState(false); // Novo estado para o mini-carrinho

  // Ref para o contêiner do carrinho para detectar cliques fora
  const miniCartRef = useRef(null);

  // Dados simulados do carrinho (SUBSTITUA POR DADOS REAIS DO SEU ESTADO/CONTEXTO)
  const simulatedCartItems = [
    {
      id: 1,
      name: 'Tênis Nike Revolution 6 Next Nature Masculino',
      price: 219.00,
      imageUrl: tenisImage, 
      quantity: 1,
    },
    {
      id: 2,
      name: 'Tênis Nike Revolution 6 Next Nature Masculino',
      price: 219.00,
      imageUrl: tenisImage, 
      quantity: 1,
    },
  ];
  const totalCartValue = simulatedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Funções de toggle, agora gerenciando o fechamento de outros elementos
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMobileSearchActive) {
      setIsMobileSearchActive(false);
    }
    if (showMiniCart) { // Fecha o mini-carrinho se o menu for aberto
      setShowMiniCart(false);
    }
  };

  const toggleMobileSearch = () => {
    setIsMobileSearchActive(!isMobileSearchActive);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    if (showMiniCart) { // Fecha o mini-carrinho se a pesquisa for aberta
      setShowMiniCart(false);
    }
  };

  const toggleMiniCart = () => {
    setShowMiniCart(!showMiniCart);
    if (isMenuOpen) { // Fecha o menu se o mini-carrinho for aberto
      setIsMenuOpen(false);
    }
    if (isMobileSearchActive) { // Fecha a pesquisa se o mini-carrinho for aberto
      setIsMobileSearchActive(false);
    }
  };

  // useEffect para fechar o mini-carrinho ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (miniCartRef.current && !miniCartRef.current.contains(event.target)) {
        setShowMiniCart(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [miniCartRef]);

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
        <div className="flex-grow flex items-center justify-center">
          <img src={digitalStoreLogoUrl} alt="Digital Store Logo" className="h-8" />
        </div>

        {/* Lado Direito: Lupa e Carrinho */}
        <div className="flex items-center space-x-4">
          {/* Ícone de Lupa para abrir a pesquisa (este botão agora só controla a linha de baixo) */}
          <button onClick={toggleMobileSearch} className="text-gray-700 hover:text-pink-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path></svg>
          </button>

          {/* Ícone do Carrinho com ref e toggle */}
          <div className="relative" ref={miniCartRef}> 
            <button onClick={toggleMiniCart} className="text-gray-700 hover:text-pink-600 focus:outline-none">
              <img src="/assets/mini-cart.svg" alt="Ícone de Carrinho" className="w-6 h-6" />
              {simulatedCartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {simulatedCartItems.length}
                </span>
              )}
            </button>

            {/* Mini-Carrinho Flutuante para Mobile */}
            {showMiniCart && (
              <div className="absolute right-0 mt-3 w-72 xs:w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4"> {/* Ajustei a largura para 72 no mobile pequeno */}
                <h3 className="text-lg font-semibold mb-3">Meu Carrinho</h3>
                <div className="space-y-4">
                  {simulatedCartItems.length === 0 ? (
                    <p className="text-gray-500 text-center">Seu carrinho está vazio.</p>
                  ) : (
                    simulatedCartItems.map((item) => (
                      <div key={item.id} className="flex items-center space-x-3 border-b pb-2 last:border-b-0 last:pb-0">
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
                      <Link to="/carrinho" onClick={() => setShowMiniCart(false)} className="w-full py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition duration-300 text-center">
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