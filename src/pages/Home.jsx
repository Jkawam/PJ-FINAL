import React from 'react';
import Cards from '../functions/Cards'; // Certifique-se de que o caminho para Cards.jsx está correto
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* O div externo py-10 controla o padding vertical geral da página. */}
      <div className='py-10'>
        {/* Este é o contêiner principal para o conteúdo, alinhado com o footer (e presumivelmente o header). */}
        {/* Usa 'container' para largura máxima responsiva, 'mx-auto' para centralizar, e 'px-4' para padding lateral. */}
        <div className="container mx-auto px-4">

          {/* Seção de Banner Principal */}
          {/* Aumentado o py-28 para dar mais altura ao banner e max-w-lg para o texto ocupar mais espaço */}
          <div className="bg-gray-50 py-28 flex flex-col md:flex-row items-center justify-between">

            <div className="max-w-lg space-y-4"> {/* Alterado de max-w-md para max-w-lg */}
              <p className="text-sm text-yellow-500 font-semibold">Melhores ofertas personalizadas</p>

              <h1 className="text-4xl font-bold text-gray-900 flex items-center">
                Queima de <br />estoque Nike <span className="ml-2">🔥</span>
              </h1>

              <p className="text-gray-500 text-sm">
                Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
              </p>

              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-700 transition">
                Ver Ofertas
              </button>
            </div>

            <div className="mt-10 md:mt-0">
              <img src="src/layouts/imagemDeProdutos/nike-air-transparente.png" alt="Tênis Nike" className="w-[500px] md:w-[600px]" />
            </div>

          </div>

          {/* Indicadores de Slider */}
          <div className="flex justify-center mt-6 space-x-2">
            <div className="w-3 h-3 bg-pink-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>

          {/* Seção "Coleção em destaque" (com bordas nas imagens) */}
          <section className='bg-gray-50 py-12'>
            <h2 className='text-xl font-semibold text-gray-800 mb-6'>Coleção em destaque</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

              {/* Primeiro item da coleção */}
              <div className='relative'>
                <img src="src/layouts/imagemDeProdutos/drop-supreme.png" alt="Supreme" className="w-full border border-gray-300 rounded-xl" />
                <span className="absolute top-2 left-2 bg-green-200 text-green-900 text-xs font-bold px-2 py-1 rounded-xl shadow">30% OFF</span>
                <button className='absolute bottom-2 left-2 bg-white text-pink-600 text-sm px-4 py-2 rounded hover:bg-pink-700 transition'>Comprar</button>
              </div>

              {/* Segundo item da coleção */}
              <div className='relative'>
                <img src="src/layouts/imagemDeProdutos/coleção-adidas.png" alt="Adidas" className="w-full border border-gray-300 rounded-xl" />
                <span className="absolute top-2 left-2 bg-green-200 text-green-900 text-xs font-bold px-2 py-1 rounded-xl shadow">30% OFF</span>
                <button className='absolute bottom-2 left-2 bg-white text-pink-600 text-sm px-4 py-2 rounded hover:bg-pink-700 transition'>Comprar</button>
              </div>

              {/* Terceiro item da coleção */}
              <div className='relative'>
                <img src="src/layouts/imagemDeProdutos/beats-bass.png" alt="Beats" className="w-full border border-gray-300 rounded-xl" />
                <span className="absolute top-2 left-2 bg-green-200 text-green-900 text-xs font-bold px-2 py-1 rounded-xl shadow">30% OFF</span>
                <button className='absolute bottom-2 left-2 bg-white text-pink-600 text-sm px-4 py-2 rounded hover:bg-pink-700 transition'>Comprar</button>
              </div>

              <div className='mt-12 flex justify-around flex-wrap gap-4'>
                <div className='flex flex-col items-center text-sm text-gray-700 '></div>
              </div>

            </div>

          </section>

          {/* Seção "Coleções em destaque" (categorias de produtos) */}
          <section className='py-12 bg-gray-50 text-center'>
            <h2 className='text-xl font-semibold text-gray-800 mb-8'>Coleções em destaque</h2>

            {/* Mantido gap-4 para mobile e adicionado md:gap-2 para aproximar no desktop */}
            <div className='grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2'> 

              {/* Itens das categorias */}
              <div className='flex flex-col items-center space-y-2'>
                <div className='bg-white w-20 h-20 rounded-full flex items-center justify-center shadow'>
                  <img src="src/layouts/imagens/camisa.png" alt="Camisetas" className='w-12 h-12' />
                </div>
                <span className='text-sm text-gray-900 font-semibold'>Camisetas</span>
              </div>

              <div className='flex flex-col items-center space-y-2'>
                <div className='bg-white w-20 h-20 rounded-full flex items-center justify-center shadow'>
                  <img src="src/layouts/imagens/calças.png" alt="Calças" className='w-12 h-12' />
                </div>
                <span className='text-sm text-gray-900 font-semibold'>Calças</span>
              </div>

              <div className='flex flex-col items-center space-y-2'>
                <div className='bg-white w-20 h-20 rounded-full flex items-center justify-center shadow'>
                  <img src="src/layouts/imagens/bones.jpg" alt="Bonés" className='w-12 h-12' />
                </div>
                <span className='text-sm text-gray-900 font-semibold'>Bonés</span>
              </div>

              <div className='flex flex-col items-center space-y-2'>
                <div className='bg-white w-20 h-20 rounded-full flex items-center justify-center shadow'>
                  <img src="src/layouts/imagens/Headphones.jpg" alt="Fones de Ouvido" className='w-16 h-12' />
                </div>
                <span className='text-sm text-gray-900 font-semibold'>Headphones</span>
              </div>

              <div className='flex flex-col items-center space-y-2 '>
                <div className='bg-white w-20 h-20 rounded-full flex items-center justify-center shadow'>

                  <img src="src/layouts/imagens/Tenis.png" alt="Tênis" className='w-14 h-14' />
                </div>
                <span className='text-sm text-gray-900 font-semibold'>Tênis</span>
              </div>

            </div>

          </section>

          {/* Seção "Produtos em alta" */}
          <section className='bg-gray-50 py-12'>
            <div className='flex justify-between mb-4'>
              <h2 className='text-xl font-semibold text-gray-800 mb-6'>Produtos em alta</h2>

               <Link to="/produtos" className="text-pink-600 text-sm font-semibold hover:underline flex items-center">
                            Ver todos
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </Link>

            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>

            <Cards imagem={"src/layouts/imagemDeProdutos/airMax.png"} produto={"Tênis"} nome={"Air Max 90 - Masculino"} preco={"R$ 200,00"} desconto={"R$ 100,00"} off={"30%"}/>
            <Cards imagem={"src/layouts/imagemDeProdutos/airMax.png"} produto={"Tênis"} nome={"Air Force 1 - Masculino"} preco={"R$ 250,00"} desconto={"R$ 150,00"} off={"30%"}/>
            <Cards imagem={"src/layouts/imagemDeProdutos/airMax.png"} produto={"Tênis"} nome={"Air Jordan 1 - Masculino"} preco={"R$ 300,00"} desconto={"R$ 200,00"} />
            <Cards imagem={"src/layouts/imagemDeProdutos/airMax.png"} produto={"Tênis"} nome={"Air Jordan 1 - Masculino"} preco={"R$ 300,00"} desconto={"R$ 200,00"} />
            <Cards imagem={"src/layouts/imagemDeProdutos/airMax.png"} produto={"Tênis"} nome={"Air Jordan 1 - Masculino"} preco={"R$ 300,00"} desconto={"R$ 200,00"} />
            <Cards imagem={"src/layouts/imagemDeProdutos/airMax.png"} produto={"Tênis"} nome={"Air Jordan 1 - Masculino"} preco={"R$ 300,00"} desconto={"R$ 200,00"} />
            <Cards imagem={"src/layouts/imagemDeProdutos/airMax.png"} produto={"Tênis"} nome={"Air Jordan 1 - Masculino"} preco={"R$ 300,00"} desconto={"R$ 200,00"} />
            <Cards imagem={"src/layouts/imagemDeProdutos/airMax.png"} produto={"Tênis"} nome={"Air Jordan 1 - Masculino"} preco={"R$ 300,00"} desconto={"R$ 200,00"} />

            </div>
          </section>

          {/* Seção de Oferta Especial Edição Limitada (sem caixa em mobile e desktop) */}
          <section className="py-6 w-full"> {/* Classes simplificadas: sem bg-white, rounded-lg */}
            <div className="mx-auto px-4 md:px-8">
              <div className="flex items-center md:flex-row flex-col gap-8">
                  <div className="md:w-1/2 flex justify-center relative">
                      {/* Círculo redondo com degradê */}
                      <div className="absolute bg-gradient-to-br from-purple-300 to-purple-100 w-80 h-80 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>
                      <img
                          src="src/layouts/imagemDeProdutos/limitado.png"
                          alt="Tênis Air Jordan Edição de Colecionador"
                          className="w-64 h-auto relative z-10"
                      />
                  </div>
                  <div className="md:w-1/2 text-center md:text-left">
                      <p className="text-pink-500 font-semibold text-sm mb-2">Oferta especial</p>
                      <h2 className="text-3xl font-bold text-gray-800 mb-4">
                          Air Jordan edição de colecionador
                      </h2>
                      <p className="text-gray-600 mb-6 text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip.
                      </p>
                      <button className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition-colors duration-300 font-semibold text-sm">
                          Ver Oferta
                      </button>
                  </div>
              </div>
            </div>
          </section>

        </div> {/* Fim do contêiner 'container mx-auto px-4' */}
      </div> {/* Fim do contêiner externo com py-10 */}
    </>
  );
}

export default Home;