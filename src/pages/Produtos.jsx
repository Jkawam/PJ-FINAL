import React, { useState, useRef, useEffect } from 'react';
import ProductFilter from '../../src/components/produtos/ProductFilter';
import ProductGrid from '../../src/components/produtos/ProductGrid';

function Produtos() {
  const [ordenacao, setOrdenacao] = useState('mais relevantes');
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const dropdownRef = useRef(null);

  const options = ['mais relevantes', 'menor preço', 'maior preço'];

  // Fecha o dropdown se clicar fora dele (usando mouseup)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener('mouseup', handleClickOutside);
    return () => document.removeEventListener('mouseup', handleClickOutside);
  }, []);

  return (
    <div className="bg-page-background py-8 min-h-screen">
      <div className="container mx-auto px-4">

        {/* Cabeçalho desktop */}
        <div className="hidden md:flex justify-between items-center mb-6">
          <p className="text-gray-700 text-lg">
            Resultados para "Tênis" - <span className="font-semibold">389 produtos</span>
          </p>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="flex items-center justify-between gap-2 min-w-[260px] border border-gray-300 rounded-md py-2 px-4 text-gray-700 whitespace-nowrap focus:outline-none bg-transparent"
            >
              <span className="whitespace-nowrap">
                <strong>Ordenar por:</strong> {ordenacao}
              </span>
              <svg
                className="w-4 h-4 text-gray-500 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown && (
              <ul className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                {options.map((opcao) => (
                  <li
                    key={opcao}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setOrdenacao(opcao);
                      setOpenDropdown(false);
                    }}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                      opcao === ordenacao ? 'text-pink-600 font-medium' : ''
                    }`}
                  >
                    {opcao}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Cabeçalho mobile */}
        <div className="md:hidden">
          <div className="flex justify-between items-center mb-4">
            <div className="relative w-[calc(100%-60px)] mr-4" ref={dropdownRef}>
              <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className="flex items-center justify-between gap-2 w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 whitespace-nowrap focus:outline-none bg-transparent"
              >
                <span className="whitespace-nowrap text-sm">
                  <strong>Ordenar por:</strong> {ordenacao}
                </span>
                <svg
                  className="w-4 h-4 text-gray-500 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown && (
                <ul className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                  {options.map((opcao) => (
                    <li
                      key={opcao}
                      onClick={() => {
                        setOrdenacao(opcao);
                        setOpenDropdown(false);
                      }}
                      className={`px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm ${
                        opcao === ordenacao ? 'text-pink-600 font-medium' : ''
                      }`}
                    >
                      {opcao}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Botão filtro mobile */}
            <button
              className="bg-pink-600 text-white p-2 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50 flex-shrink-0"
              onClick={() => setOpenFilter(true)}
              aria-label="Abrir filtros"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 18H7.5m3-6h9.75m-9.75 0a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 12H7.5"
                />
              </svg>
            </button>
          </div>
          <p className="text-gray-700 text-base mb-6">
            Resultados para "Tênis" - <span className="font-semibold">389 produtos</span>
          </p>
        </div>

        {/* Layout principal */}
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-stretch h-full">

          {/* Filtro desktop */}
          <div className="hidden md:block w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md h-full overflow-y-auto">
            <h2 className="font-bold text-xl text-gray-800 mb-6">Filtrar por</h2>
            <ProductFilter />
          </div>

          {/* Drawer filtro mobile */}
          {openFilter && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300"
              onClick={() => setOpenFilter(false)}
            >
              <div
                className={`fixed top-0 left-0 h-full bg-white w-full max-w-xs shadow-lg transition-transform duration-300 ease-out p-6 overflow-y-auto
                  ${openFilter ? 'translate-x-0' : '-translate-x-full'}`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold text-xl text-gray-800">Filtrar por</h2>
                  <button
                    onClick={() => setOpenFilter(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl font-bold focus:outline-none ml-4"
                    aria-label="Fechar filtros"
                  >
                    &times;
                  </button>
                </div>
                <ProductFilter />
              </div>
            </div>
          )}

          {/* Grid produtos */}
          <div className="w-full md:w-2/3 h-full">
            <ProductGrid ordem={ordenacao} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produtos;
