import React from 'react';

function Home() {
  return (
    <>
      {/* Container principal */}
      <div className="bg-gray-50 px-6 py-20 flex flex-col md:flex-row items-center justify-between">
        {/* Coluna da esquerda */}
        <div className="max-w-md space-y-4">
          {/* Texto superior */}
          <p className="text-sm text-yellow-500 font-semibold">Melhores ofertas personalizadas</p>

          {/* Título */}
          <h1 className="text-4xl font-bold text-gray-900 flex items-center">
            Queima de <br />estoque Nike <span className="ml-2">🔥</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-gray-500 text-sm">
            Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
          </p>

          {/* Botão */}
          <button className="bg-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-700 transition">
            Ver Ofertas
          </button>
        </div>

        {/* Coluna da direita: imagem */}
        <div className="mt-10 md:mt-0">
          <img src="src/layouts/imagemDeProdutos/nike-air-transparente.png" alt="Tênis Nike" className="w-[300px] md:w-[400px]" />
        </div>
      </div>

      {/* Indicadores do carrossel */}
      <div className="flex justify-center mt-6 space-x-2">
        <div className="w-3 h-3 bg-pink-600 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      </div>

      <section className='bg-gray-50 px-6 py-12'>
  <h2 className='text-xl font-semibold text-gray-800 mb-6'>Coleção em destaque</h2>

  <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
    
    {/* Card 1 */}
    <div className='bg-white p-4 rounded-xl shadow-sm'>
      <div className="relative">
        <img src="src/layouts/imagemDeProdutos/drop-supreme.png" alt="Supreme" className="w-full rounded-xl"/>
        <span className="absolute top-2 left-2 bg-green-200 text-green-900 text-xs font-bold px-2 py-1 rounded-xl shadow">30% OFF</span>
        <button className='absolute bottom-2 left-2 bg-white text-pink-600 text-sm px-4 py-2 rounded hover:bg-pink-700 transition'>Comprar</button>
      </div>
    </div>

    {/* Card 2 */}
    <div className='bg-white p-4 rounded-xl shadow-sm'>
      <div className="relative">
        <img src="src/layouts/imagemDeProdutos/coleção-adidas.png" alt="Adidas" className="w-full rounded-xl"/>
        <span className="absolute top-2 left-2 bg-green-200 text-green-900 text-xs font-bold px-2 py-1 rounded-xl shadow">30% OFF</span>
        <button className='absolute bottom-2 left-2 bg-white text-pink-600 text-sm px-4 py-2 rounded hover:bg-pink-700 transition'>Comprar</button>
      </div>
    </div>

    <div className='bg-white p-4 rounded-xl shadow-sm'>
      <div className="relative">
        <img src="src/layouts/imagemDeProdutos/beats-bass.png" alt="Beats" className="w-full rounded-xl"/>
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
          <img src="src/layouts/imagens/camisa.png" alt="Camisetas" className='w-12 h-12'  />
        </div>
        <span className='text-sm text-gray-900 font-semibold'>Camisetas</span>
      </div>

      <div className='flex flex-col items-center space-y-2'>
        <div className='bg-white w-20 h-20 rounded-full flex items-center justify-center shandow'>
          <img src="src/layouts/imagens/calças.png" alt="Calças" className='w-12 h-12'  />
        </div>
        <span className='text-sm text-gray-900 font-semibold'>Calças</span>
      </div>

      <div className='flex flex-col items-center space-y-2'>
        <div className='bg-white w-20 h-20 rounded-full flex items-center justify-center shandow'>
          <img src="src/layouts/imagens/bones.jpg" alt="Bonés" className='w-12 h-12'  />
        </div>
        <span className='text-sm text-gray-900 font-semibold'>Bonés</span>
      </div>

      <div className='flex flex-col items-center space-y-2'>
        <div className='bg-white w-20 h-20 rounded-full flex items-center justify-center shandow'>
          <img src="src/layouts/imagens/Headphones.jpg" alt="Fones de Ouvido" className='w-16 h-12'  />
        </div>
        <span className='text-sm text-gray-900 font-semibold'>Headphones</span>
      </div>

      <div className='flex flex-col items-center space-y-2 '>
        <div className='bg-white w-20 h-20 rounded-full flex items-center justify-center shandow'>
          
          <img src="src/layouts/imagens/Tenis.png" alt="Tênis" className='w-14 h-14'  />
        </div>
        <span className='text-sm text-gray-900 font-semibold'>Tênis</span>
      </div>

      
      
    </div>


</section>




    </>
  );
}

export default Home;
