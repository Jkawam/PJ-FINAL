// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSearchActive, setIsMobileSearchActive] = useState(false); // Estado para controlar a barra de pesquisa no mobile

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
    <header className="bg-white shadow-md">

      {/* BLOCO DO CABEÇALHO MOBILE (Visível APENAS em telas pequenas) */}
      <div className="md:hidden">
        {/* Primeira linha do Header Mobile: Hamburguer, Nome do Site, Lupa, Carrinho */}
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Lado Esquerdo: Hamburguer */}
          <button onClick={toggleMenu} className="text-gray-700 hover:text-pink-600 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          {/* Meio: Nome do Site (Digital Store) */}
          <span className="text-2xl font-bold text-pink-600">Digital Store</span>

          {/* Lado Direito: Lupa e Carrinho */}
          <div className="flex items-center space-x-4">
            {/* Ícone de Lupa para abrir a pesquisa (aparece junto com o carrinho) */}
            <button onClick={toggleMobileSearch} className="text-gray-700 hover:text-pink-600 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path></svg>
            </button>

            {/* Ícone do Carrinho */}
            <div className="relative">
              <Link to="/carrinho" className="text-gray-700 hover:text-pink-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.023.828L5.58 15.65a4.723 4.723 0 0 0 .568.494l5.636 4.489a1.125 1.125 0 0 0 1.996 0l5.636-4.489a4.723 4.723 0 0 0 .568-.494l.676-3.137A6.026 6.026 0 0 1 21 12v3.375c0 .621-.504 1.125-1.125 1.125H3.375c-.621 0-1.125-.504-1.125-1.125V12A9 9 0 0 0 14.625 9c-1.313 0-2.613.304-3.825.9-.663.348-1.324.646-1.99.902a1.125 1.125 0 0 1-1.44-.373L7.5 10.5h-.375c-.621 0-1.125.504-1.125 1.125v.75m8.868-9.75v-1.063c0-.621.504-1.125 1.125-1.125h.75c.621 0 1.125.504 1.125 1.125v1.063a4.723 4.723 0 0 0 1.83 2.87M8.067 7.5c.9-.228 1.83-.348 2.763-.348 2.06 0 4.103.7 5.766 2.09l.375-.375M1.5 12a9 9 0 0 1 14.625-7.5" />
                </svg>
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
      </div>

      {/* BLOCO DO CABEÇALHO DESKTOP (Visível APENAS em telas maiores) */}
      <div className="hidden md:block">
        {/* Primeira linha do Header Desktop: Logo Completo, Barra de Pesquisa, Ações do Usuário */}
        <div className="container mx-auto px-4 py-3 flex items-center justify-between md:py-4">
          {/* Logo Completo (Imagem Perfil + Imagem Logo + Texto) */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-pink-600">Digital Store</span>
          </div>

          {/* Barra de Pesquisa Desktop */}
          <div className="flex-grow md:max-w-3xl md:mx-8 relative">
            <input
              type="text"
              placeholder="Pesquisar produto..."
              className="w-full py-2 px-4 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
          </div>

          {/* Ações do Usuário Desktop (Cadastre-se, Entrar, Carrinho) */}
          <div className="flex items-center space-x-10">
            <Link to="/cadastro" className="text-gray-700 hover:text-pink-600">Cadastre-se</Link>
            <Link to="/entrar" className="bg-pink-600 text-white px-14 py-3 rounded-md hover:bg-pink-700 transition duration-300">Entrar</Link>
            <div className="relative"> {/* Ícone do carrinho Desktop */}
              <Link to="/carrinho" className="text-gray-700 hover:text-pink-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.023.828L5.58 15.65a4.723 4.723 0 0 0 .568.494l5.636 4.489a1.125 1.125 0 0 0 1.996 0l5.636-4.489a4.723 4.723 0 0 0 .568-.494l.676-3.137A6.026 6.026 0 0 1 21 12v3.375c0 .621-.504 1.125-1.125 1.125H3.375c-.621 0-1.125-.504-1.125-1.125V12A9 9 0 0 0 14.625 9c-1.313 0-2.613.304-3.825.9-.663.348-1.324.646-1.99.902a1.125 1.125 0 0 1-1.44-.373L7.5 10.5h-.375c-.621 0-1.125.504-1.125 1.125v.75m8.868-9.75v-1.063c0-.621.504-1.125 1.125-1.125h.75c.621 0 1.125.504 1.125 1.125v1.063a4.723 4.723 0 0 0 1.83 2.87M8.067 7.5c.9-.228 1.83-.348 2.763-.348 2.06 0 4.103.7 5.766 2.09l.375-.375M1.5 12a9 9 0 0 1 14.625-7.5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Segunda linha: Links de Navegação (Versão Desktop) */}
        <nav className="bg-white py-3">
          <div className="container mx-auto px-4 flex items-center justify-start text-lg font-medium text-gray-800">
            <div className="flex space-x-10">
              {/* Aplicadas as classes para o hover de negrito e linha para os links de navegação desktop */}
              <Link to="/" className="relative hover:text-pink-600 transition duration-200 group hover:font-bold">
                <span className="relative inline-block">
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
              <Link to="/produtos" className="relative hover:text-pink-600 transition duration-200 group hover:font-bold">
                <span className="relative inline-block">
                    Produtos
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
              <Link to="/categorias" className="relative hover:text-pink-600 transition duration-200 group hover:font-bold">
                <span className="relative inline-block">
                    Categorias
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
              <Link to="/meus-pedidos" onClick={toggleMenu} className="relative hover:text-pink-600 transition duration-200 group hover:font-bold">
                <span className="relative inline-block">
                    Meus Pedidos
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* BLOCO DO MENU MOBILE (Abre ao clicar no Hamburguer) */}
      <div className={`fixed inset-0 bg-white z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden flex flex-col`}>
        {/* Cabeçalho do Menu Mobile (Logo e botão de fechar) */}
        <div className="p-4 flex justify-between items-center border-b">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-pink-600">Digital Store</span>
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
          
          {/* Links de Navegação Mobile */}
          <Link to="/" onClick={toggleMenu} className="relative text-gray-800 hover:text-pink-600 text-lg py-2 group hover:font-bold">
            <span className="relative inline-block">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          <Link to="/produtos" onClick={toggleMenu} className="relative text-gray-800 hover:text-pink-600 text-lg py-2 group hover:font-bold">
            <span className="relative inline-block">
                Produtos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          <Link to="/categorias" onClick={toggleMenu} className="relative text-gray-800 hover:text-pink-600 text-lg py-2 group hover:font-bold">
            <span className="relative inline-block">
                Categorias
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          <Link to="/meus-pedidos" onClick={toggleMenu} className="relative text-gray-800 hover:text-pink-600 text-lg py-2 group hover:font-bold">
            <span className="relative inline-block">
                Meus Pedidos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          
          {/* Seção separada para Entrar e Cadastre-se */}
          <div className="pt-4 border-t mt-auto flex flex-col space-y-2">
            {/* Botão Entrar */}
            <Link to="/entrar" onClick={toggleMenu} className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 text-center w-full border-2 border-dashed border-transparent hover:border-pink-600">Entrar</Link>
            {/* Link Cadastre-se - APLICADO O HOVER DE NEGRIÇÃO E LINHA (removendo borda tracejada) */}
            <Link to="/cadastro" onClick={toggleMenu} className="relative text-gray-700 hover:text-pink-600 py-2 text-center w-full group hover:font-bold">
              <span className="relative inline-block"> {/* Mantido o inline-block para o alinhamento da linha, se necessário */}
                Cadastre-se
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span> {/* Adicionado o span para a linha */}
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;