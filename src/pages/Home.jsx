import React from 'react';
import Cards from '../functions/Cards';

function Home() {
  return (
    <>
      <div className='px-6 py-10'>
        
        <div className="bg-gray-50 px-6 py-20 flex flex-col md:flex-row items-center justify-between">
          
          <div className="max-w-md space-y-4">
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

        <div className="flex justify-center mt-6 space-x-2">
          <div className="w-3 h-3 bg-pink-600 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>

        <section className='bg-gray-50 px-6 py-12'>
          <h2 className='text-xl font-semibold text-gray-800 mb-6'>Coleção em destaque</h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

            <div className='bg-white p-4 rounded-xl shadow-sm'>
              <div className="relative">
                <img src="src/layouts/imagemDeProdutos/drop-supreme.png" alt="Supreme" className="w-full rounded-xl" />
                <span className="absolute top-2 left-2 bg-green-200 text-green-900 text-xs font-bold px-2 py-1 rounded-xl shadow">30% OFF</span>
                <button className='absolute bottom-2 left-2 bg-white text-pink-600 text-sm px-4 py-2 rounded hover:bg-pink-700 transition'>Comprar</button>
              </div>
            </div>

            <div className='bg-white p-4 rounded-xl shadow-sm'>
              <div className="relative">
                <img src="src/layouts/imagemDeProdutos/coleção-adidas.png" alt="Adidas" className="w-full rounded-xl" />
                <span className="absolute top-2 left-2 bg-green-200 text-green-900 text-xs font-bold px-2 py-1 rounded-xl shadow">30% OFF</span>
                <button className='absolute bottom-2 left-2 bg-white text-pink-600 text-sm px-4 py-2 rounded hover:bg-pink-700 transition'>Comprar</button>
              </div>
            </div>

            <div className='bg-white p-4 rounded-xl shadow-sm'>
              <div className="relative">
                <img src="src/layouts/imagemDeProdutos/beats-bass.png" alt="Beats" className="w-full rounded-xl" />
                <span className="absolute top-2 left-2 bg-green-200 text-green-900 text-xs font-bold px-2 py-1 rounded-xl shadow">30% OFF</span>
                <button className='absolute bottom-2 left-2 bg-white text-pink-600 text-sm px-4 py-2 rounded hover:bg-pink-700 transition'>Comprar</button>
              </div>
            </div>

            <div className='mt-12 flex justify-around flex-warp gap-4'>
              <div className='flex flex-col items-center text-sm text-gray-700 '></div>
            </div>

          </div>

        </section>

        <section className='py-12 bg-gray-50 text-center'>
          <h2 className='text-xl font-semibold text-gray-800 mb-8'>Coleções em destaque</h2>

          <div className='grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto'>

            <div className='flex flex-col items-center space-y-2'>
              <div className='bg-white w-20 h-20 rounded-full flex items-center justify-center shandow'>
                <img src="src/layouts/imagens/camisa.png" alt="Camisetas" className='w-12 h-12' />
              </div>
              <span className='text-sm text-gray-900 font-semibold'>Camisetas</span>
            </div>

            <div className='flex flex-col items-center space-y-2'>
              <div className='bg-white w-20 h-20 rounded-full flex items-center justify-center shandow'>
                <img src="src/layouts/imagens/calças.png" alt="Calças" className='w-12 h-12' />
              </div>
              <span className='text-sm text-gray-900 font-semibold'>Calças</span>
            </div>

            <div className='flex flex-col items-center space-y-2'>
              <div className='bg-white w-20 h-20 rounded-full flex items-center justify-center shandow'>
                <img src="src/layouts/imagens/bones.jpg" alt="Bonés" className='w-12 h-12' />
              </div>
              <span className='text-sm text-gray-900 font-semibold'>Bonés</span>
            </div>

            <div className='flex flex-col items-center space-y-2'>
              <div className='bg-white w-20 h-20 rounded-full flex items-center justify-center shandow'>
                <img src="src/layouts/imagens/Headphones.jpg" alt="Fones de Ouvido" className='w-16 h-12' />
              </div>
              <span className='text-sm text-gray-900 font-semibold'>Headphones</span>
            </div>

            <div className='flex flex-col items-center space-y-2 '>
              <div className='bg-white w-20 h-20 rounded-full flex items-center justify-center shandow'>

                <img src="src/layouts/imagens/Tenis.png" alt="Tênis" className='w-14 h-14' />
              </div>
              <span className='text-sm text-gray-900 font-semibold'>Tênis</span>
            </div>

          </div>

        </section>

        <section className='bg-gray-50 px-6 py-12
        '>
          <div className='flex justify-between mb-4'>
            <h2 className='text-xl font-semibold text-gray-800 mb-6'>Produtos em alta</h2>

            <button
              className="relative bg-pink-600 text-white font-medium text-[17px] px-4 py-[0.35em] pl-5 h-[2.8em] rounded-[0.9em] flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] group"
            >
              <span className="mr-10">Ver todos</span>
              <div
                className="absolute right-[0.3em] bg-white h-[2.2em] w-[2.2em] rounded-[0.7em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] active:scale-95"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="w-[1.1em] transition-transform duration-300 text-[#7b52b9] group-hover:translate-x-[0.1em]"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  ></path>
                </svg>
              </div>
            </button>

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

        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">

            <div className="relative w-72 h-72 flex items-center justify-center">
              <div className="absolute inset-0 m-auto bg-purple-200 rounded-full w-72 h-72 z-0"></div>

              <img
                src="src/layouts/imagemDeProdutos/limitado.png"
                alt="Tênis Air Jordan"
                className="w-60 object-contain z-10"
              />
            </div>

            <div className="max-w-xl text-center md:text-left">
              <p className="text-pink-600 text-sm font-semibold mb-2">Oferta especial</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Edição Limitada Air Jordan
              </h2>
              <p className="text-gray-600 mb-6">
                Garanta já seu modelo exclusivo da linha Air Jordan com design moderno,
                materiais premium e disponibilidade limitada. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias totam beatae aspernatur quasi voluptas ea voluptatibus sit eum rem veritatis. Maxime debitis provident impedit ut nulla eum, libero dolore vel!
              </p>
              <button className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition">
                Ver Oferta
              </button>
            </div>

          </div>
        </section>


      </div>
    </>
  );
}

export default Home;
