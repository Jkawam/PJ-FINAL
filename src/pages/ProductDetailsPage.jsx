// src/pages/ProductDetailsPage.jsx
import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'; // Importe useNavigate

// Importe as imagens diretamente aqui
import producImage5Preview from '../assets/images/produtos/produc-image-5-removebg-preview.png';
import arrowRight from '../assets/images/arrow-right.svg'; // Importe a seta direita
import arrowLeft from '../assets/images/arrow-left.svg'; // Importe a seta esquerda

// Array de cores para o fundo das miniaturas (para simular a imagem)
const THUMBNAIL_COLORS = [
  '#E6E6FA', // Lavanda claro (cor da primeira thumbnail na sua imagem original)
  '#FFFACD', // Amarelo claro
  '#FFDAB9', // Pêssego claro
  '#D2B48C', // Bege
  '#F5F5DC', // Bege mais claro
];

// Função para criar uma lista de produtos que se repete para o carrossel
const getRepeatingProducts = (allProducts, currentProductId, repeatCount = 5) => {
  // Filtra o produto atualmente exibido na página principal
  const filteredProducts = Object.values(allProducts).filter(p => p.id !== parseInt(currentProductId)); // Garante que o ID seja um número

let repeatingList = [];
  // Repete a lista de produtos um número de vezes para garantir continuidade
for (let i = 0; i < repeatCount; i++) {
    repeatingList = repeatingList.concat(filteredProducts);
}
  // Adiciona uma chave única para cada item repetido no carrossel para evitar warnings do React
return repeatingList.map((p, index) => ({ ...p, uniqueCarouselId: `${p.id}-${index}` }));
};


function ProductDetailsPage() {
  const { id } = useParams(); // Hook para pegar o ID do produto da URL
  const navigate = useNavigate(); // Hook para navegação programática

  // Ref para o contêiner do carrossel
const carouselRef = useRef(null);

  // --- Dados de produto mockados ---
const mockProducts = {
    '1': {
    id: 1,
    name: "Tênis Nike Revolution 6 Next Nature Masculino",
    category: "Casual | Nike",
    ref: "REF:38416666",
    rating: 4.7,
    reviews: 90,
    currentPrice: "R$ 219,00",
    oldPrice: "299,00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et adore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    mainImageUrl: producImage5Preview,
      // Miniaturas para cada produto. Podem ser diferentes se desejar.
    thumbnailImages: [
        producImage5Preview,
        producImage5Preview,
        producImage5Preview,
        producImage5Preview,
        producImage5Preview,
    ],
    sizes: [39, 40, 41, 42, 43],
    colors: ['#FF0000', '#00FFFF', '#FFA500', '#800080'],
    },
    '2': {
    id: 2,
      name: "Tênis K-Swiss V8 - Masculino", // Nome ajustado
      category: "Tênis", // Categoria ajustada
    ref: "REF:87654321",
    rating: 4.2,
    reviews: 75,
      currentPrice: "R$ 100,00", // Formato de preço ajustado
      oldPrice: "R$ 200,00", // Formato de preço ajustado
      discount: "30%", // Adicionado desconto
    description: "Um tênis excelente para suas atividades diárias e esportivas, com conforto e durabilidade garantidos. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        mainImageUrl: producImage5Preview,
    thumbnailImages: [
        producImage5Preview,
        producImage5Preview,
        producImage5Preview,
        producImage5Preview,
        producImage5Preview,
    ],
    sizes: [38, 39, 40, 41, 42],
    colors: ['#0000FF', '#FFFF00', '#FF0000'],
    },
    // Todos os produtos abaixo terão a mesma configuração de imagem e dados ajustados para ProductCard
    '3': { 
    id: 3, name: "Tênis Esportivo Pro", category: "Esporte", ref: "REF:90123456", rating: 4.5, reviews: 120, 
      currentPrice: "R$ 100,00", oldPrice: "R$ 200,00", discount: "30%", // Ajustado formato de preço e desconto
    description: "Ideal para alta performance em esportes. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
    mainImageUrl: producImage5Preview, 
    thumbnailImages: [producImage5Preview, producImage5Preview, producImage5Preview, producImage5Preview, producImage5Preview], 
    sizes: [39, 40, 41], colors: ['#00FF00', '#FF0000'], 
    },
    '4': { 
    id: 4, name: "Sandália Verão", category: "Casual", ref: "REF:11223344", rating: 3.9, reviews: 50, 
      currentPrice: "R$ 70,00", oldPrice: null, discount: null, // Ajustado formato de preço e desconto
    description: "Perfeita para os dias quentes. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
    mainImageUrl: producImage5Preview, 
    thumbnailImages: [producImage5Preview, producImage5Preview, producImage5Preview, producImage5Preview, producImage5Preview], 
    sizes: [35, 36, 37, 38], colors: ['#FFC0CB', '#000000'], 
    },
    '5': { 
    id: 5, name: "Bota Couro Genuíno", category: "Utilitário", ref: "REF:55667788", rating: 4.8, reviews: 200, 
      currentPrice: "R$ 450,00", oldPrice: "R$ 600,00", discount: "15%", // Ajustado formato de preço e desconto
    description: "Durabilidade e estilo para qualquer aventura. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
    mainImageUrl: producImage5Preview, 
    thumbnailImages: [producImage5Preview, producImage5Preview, producImage5Preview, producImage5Preview, producImage5Preview], 
    sizes: [40, 41, 42, 43, 44], colors: ['#A52A2A', '#00FFFF'], 
    },
    '6': { 
    id: 6, name: "Chuteira Campo Pro", category: "Esporte", ref: "REF:99001122", rating: 4.6, reviews: 150, 
      currentPrice: "R$ 280,00", oldPrice: "R$ 350,00", discount: null, // Ajustado formato de preço e desconto
    description: "Controle e velocidade no campo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
    mainImageUrl: producImage5Preview, 
    thumbnailImages: [producImage5Preview, producImage5Preview, producImage5Preview, producImage5Preview, producImage5Preview], 
    sizes: [41, 42, 43], colors: ['#000000', '#FF0000'], 
    },
    '7': { 
    id: 7, name: "Tênis Casual Leve", category: "Casual", ref: "REF:33445566", rating: 4.1, reviews: 95, 
    currentPrice: "R$ 130,00", oldPrice: null, discount: null, 
    description: "Conforto e estilo para o dia a dia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
    mainImageUrl: producImage5Preview, 
    thumbnailImages: [producImage5Preview, producImage5Preview, producImage5Preview, producImage5Preview, producImage5Preview], 
    sizes: [37, 38, 39, 40], colors: ['#FFFFFF', '#000000'], 
    },
    '8': { 
    id: 8, name: "Tênis Corrida Performance", category: "Corrida", ref: "REF:77889900", rating: 4.9, reviews: 300, 
    currentPrice: "R$ 350,00", oldPrice: "R$ 420,00", discount: "10%", 
    description: "Tecnologia avançada para corredores. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
    mainImageUrl: producImage5Preview, 
    thumbnailImages: [producImage5Preview, producImage5Preview, producImage5Preview, producImage5Preview, producImage5Preview], 
    sizes: [40, 41, 42, 43], colors: ['#FF4500', '#0000FF'], 
    },
    '9': { 
    id: 9, name: "Sapato Social Elegance", category: "Casual", ref: "REF:10101010", rating: 4.3, reviews: 60, 
    currentPrice: "R$ 200,00", oldPrice: null, discount: null, 
    description: "Elegância e conforto para o trabalho. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
    mainImageUrl: producImage5Preview, 
    thumbnailImages: [producImage5Preview, producImage5Preview, producImage5Preview, producImage5Preview, producImage5Preview], 
    sizes: [39, 40, 41, 42], colors: ['#36454F', '#A52A2A'], 
    },
    '10': { 
    id: 10, name: "Tênis Skate Urbano", category: "Esporte", ref: "REF:20202020", rating: 4.0, reviews: 80, 
    currentPrice: "R$ 160,00", oldPrice: "R$ 210,00", discount: "20%", 
    description: "Estilo e aderência para o skate. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
    mainImageUrl: producImage5Preview, 
    thumbnailImages: [producImage5Preview, producImage5Preview, producImage5Preview, producImage5Preview, producImage5Preview], 
    sizes: [38, 39, 40, 41], colors: ['#000080', '#00FF00'], 
    }
};

const initialProduct = mockProducts[id] || mockProducts['1'];
const [product, setProduct] = useState(initialProduct);

  // Novo estado para controlar o índice da imagem principal
const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Define a imagem principal baseada no índice atual
const [mainImage, setMainImage] = useState(initialProduct?.thumbnailImages[0] || initialProduct?.mainImageUrl);

  // Estado para controlar qual miniatura está selecionada para a borda rosa
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0); // Começa com a primeira

  // Novo estado para controlar o tamanho selecionado
const [selectedSize, setSelectedSize] = useState(null);

  // Estado para controlar a cor selecionada
const [selectedColor, setSelectedColor] = useState(null);

  // Lógica para atualizar o produto, a imagem principal e o índice se o ID da URL mudar
useEffect(() => {
    const currentProduct = mockProducts[id] || mockProducts['1'];
    setProduct(currentProduct);
    // Assegura que thumbnailImages exista antes de tentar acessar o índice
    setMainImage(currentProduct?.thumbnailImages?.[0] || currentProduct?.mainImageUrl); 
    setCurrentImageIndex(0); // Resetar o índice ao mudar de produto
    setSelectedThumbnailIndex(0); // Resetar a seleção da miniatura ao mudar de produto
    setSelectedSize(null); // Resetar o tamanho selecionado ao mudar de produto
    setSelectedColor(currentProduct?.colors?.[0] || null); // Seleciona a primeira cor por padrão
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [id]);

  // Função para lidar com a seleção da miniatura
const handleThumbnailClick = (thumbUrl, index) => {
    setMainImage(thumbUrl);
    setCurrentImageIndex(index); // Atualiza o índice da imagem principal
    setSelectedThumbnailIndex(index);
};

  // Função para navegar pelas imagens principais com as setas
    const navigateMainImage = (direction) => {
    if (!product.thumbnailImages || product.thumbnailImages.length === 0) {
      return; // Não faz nada se não houver miniaturas
    }

    const totalImages = product.thumbnailImages.length;
    let newIndex = currentImageIndex;

    if (direction === 'left') {
        newIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    } else { // direction === 'right'
        newIndex = (currentImageIndex + 1) % totalImages;
    }
    
    setCurrentImageIndex(newIndex);
    setMainImage(product.thumbnailImages[newIndex]);
    setSelectedThumbnailIndex(newIndex); // Sincroniza a miniatura selecionada
};

  // Função para rolar o carrossel de produtos relacionados
const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      // Obter o primeiro card para calcular a largura
    const firstCard = carouselRef.current.querySelector('.product-card-carousel');
    if (!firstCard) return;
    
    const cardWidth = firstCard.offsetWidth;
      // Pegar a largura da margem definida no Tailwind (gap-x-4 é 16px)
    const gapX = 16; 
      const cardTotalWidth = cardWidth + gapX; // Largura do card + seu gap

    let scrollAmount;

      // Se for desktop (md e acima), rola 1 card por vez para um efeito mais lento
      if (window.innerWidth >= 768) { // md breakpoint é 768px
        scrollAmount = cardTotalWidth; // Rola 1 card completo
      } else { // Mobile e sm
        scrollAmount = cardTotalWidth * 2; // Rola 2 cards completos no mobile/sm
    }

    if (direction === 'left') {
        carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
    }
};

return (
    <div className="bg-page-background py-8 min-h-screen font-inter">
    <div className="container mx-auto px-4">

        {/* Breadcrumbs (Navegação hierárquica) */}
        <div className="text-gray-600 text-sm mb-4">
        <Link to="/" className="hover:underline">Home</Link> /
        <Link to="/produtos" className="hover:underline"> Produtos</Link> /
        {product.category.includes('|') ? (
            <Link to={`/produtos?brand=${product.category.split('|')[1].trim().toLowerCase()}`} className="hover:underline">
            {product.category.split('|')[1].trim()}
            </Link>
        ) : (
            <Link to={`/produtos?category=${product.category.toLowerCase()}`} className="hover:underline">
            {product.category}
            </Link>
        )} /
        <span className="font-semibold text-gray-800">{product.name}</span>
        </div>

        {/* Container flex para a imagem e detalhes do produto */}
        <div className="lg:flex lg:gap-8 items-stretch">
          {/* Seção da Imagem Principal */}
        <div className="lg:w-1/2 relative flex flex-col items-center mb-6 lg:mb-0">
            {/* Div que envolve APENAS a imagem principal para o fundo e bordas */}
            <div className="w-full bg-purple-100 rounded-lg p-4 mb-4 relative"> {/* Adicionado 'relative' */}
                {/* Imagem Principal */}
                <img
                    src={mainImage}
                    alt={product.name}
                    className="w-full max-h-[500px] object-contain"
                />
                {/* Botões de navegação da imagem (usando as SVGs importadas) */}
                {product.thumbnailImages && product.thumbnailImages.length > 1 && ( // Mostra botões apenas se houver mais de 1 imagem
                    <>
                        <button
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 z-10"
                            onClick={() => navigateMainImage('left')}
                            aria-label="Imagem anterior"
                        >
                            <img src={arrowLeft} alt="Seta para a esquerda" className="w-6 h-6 text-gray-700" />
                        </button>
                        <button
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 z-10"
                            onClick={() => navigateMainImage('right')}
                            aria-label="Próxima imagem"
                        >
                            <img src={arrowRight} alt="Seta para a direita" className="w-6 h-6 text-gray-700" />
                        </button>
                    </>
                )}
            </div>

            {/* Miniaturas da Galeria */}
            <div className="flex justify-between mt-4 w-full"> 
            {product.thumbnailImages && product.thumbnailImages.map((thumb, index) => (
                <div
                key={index}
                className={`w-1/5 max-w-[calc(20%-0.5rem)] h-20 sm:h-24 rounded-lg flex items-center justify-center cursor-pointer border-2 ${
                    selectedThumbnailIndex === index ? 'border-pink-600' : 'border-transparent' // Borda rosa para o selecionado
                }`}
                  style={{ backgroundColor:[index % THUMBNAIL_COLORS.length] }} // Aplica a cor de fundo pelo índice
                onClick={() => handleThumbnailClick(thumb, index)}
                >
                <img
                    src={thumb} // Usa a URL da miniatura diretamente
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-auto object-contain p-2" // Adicionado padding para a imagem não tocar as bordas da caixa
                />
                </div>
            ))}
            </div>
        </div>

          {/* Detalhes do Produto (seção à direita) */}
        <div className="lg:w-1/2 pt-4 lg:pt-0 flex flex-col min-h-full flex-grow">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-xs sm:text-sm text-gray-500 mb-2">{product.category} | {product.ref}</p>

            {/* Avaliação */}
            <div className="flex items-center mb-4">
            <span className="text-yellow-500 flex text-base">
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
            </span>
            <span className="ml-2 text-gray-700 font-semibold text-sm">{product.rating}</span>
            <span className="text-gray-500 ml-1 text-sm">({product.reviews} avaliações )</span>
            </div>

            {/* Preços */}
            <div className="mb-6">
            {product.oldPrice && (
                <span className="text-base text-gray-500 line-through mr-2">{product.oldPrice}</span>
            )}
            <span className="text-2xl sm:text-3xl font-bold text-black">{product.currentPrice}</span>
            </div>

            {/* Descrição */}
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Descrição do produto</h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base">{product.description}</p> 

            {/* Tamanho */}
            <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Tamanho</h3>
            <div className="flex gap-2 flex-wrap">
                {product.sizes && product.sizes.map((size) => (
                <button
                    key={size}
                    // Adiciona classes condicionais para o tamanho selecionado
                    className={`border border-gray-300 rounded-md py-2 px-4 min-w-[50px] text-center text-sm
                    ${selectedSize === size 
                        ? 'bg-pink-600 text-white border-pink-600' 
                        : 'hover:border-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50 text-gray-800'
                    }`}
                    onClick={() => setSelectedSize(size)} // Define o tamanho selecionado ao clicar
                >
                    {size}
                </button>
                ))}
            </div>
            </div>

            {/* Cores */}
            <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Cor</h3>
            <div className="flex gap-2 flex-wrap">
                {product.colors && product.colors.map((color, index) => (
                <button
                    key={index}
                    className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-pink-600' : 'border-gray-300 hover:border-pink-600'} focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50`}
                    style={{ backgroundColor: color }}
                    aria-label={`Cor ${color}`}
                    onClick={() => setSelectedColor(color)} // Define a cor selecionada ao clicar
                ></button>
                ))}
            </div>
            </div>

            {/* Botão Comprar */}
            <button
            className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-200 text-lg shadow-md mt-auto"
              onClick={() => navigate('/compraprodutos')} // Navega para a página de compra
            >
            COMPRAR
            </button>
        </div>
        </div>

        {/* --- */}

        {/* Produtos Relacionados - SEÇÃO DO CARROSSEL */}
        <div className="mt-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex justify-between items-center">
            Produtos Relacionados
            <Link to="/produtos" className="text-pink-600 text-sm font-semibold hover:underline flex items-center">
            Ver todos
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            </Link>
        </h2>

          {/* Container do Carrossel com botões de navegação */}
            <div className="relative">
            <button
                onClick={() => scrollCarousel('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100 transition-colors z-10 hidden md:block" // Esconde em mobile
                aria-label="Rolar para a esquerda"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>

            <div
                ref={carouselRef}
              className="flex overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide gap-x-4 px-4 py-2" // Adicionado gap-x-4 e px-4/py-2 para espaçamento e padding
            >
                {getRepeatingProducts(mockProducts, product.id).map(prod => (
                <Link 
                    to={`/produtos/${prod.id}`} 
                    key={prod.uniqueCarouselId} 
                  className="flex-none w-[calc(50%-0.5rem)] sm:w-[calc(33.33%-0.66rem)] md:w-[calc(25%-0.75rem)] product-card-carousel" // Adicionado classe para identificar o card
                >
                    <div className="overflow-hidden relative pb-4">
                        {prod.discount && (
                            <span className="absolute top-2 left-2 bg-green-200 text-green-900 text-xs font-bold px-2 py-1 rounded-full z-10">
                                {prod.discount} OFF
                            </span>
                        )}
                        {/* Div para a imagem do produto relacionado com fundo e arredondamento */}
                        <div className="bg-white rounded-lg p-4 mb-2 shadow-sm">
                            <img src={prod.mainImageUrl || prod.thumbnailImages[0]} alt={prod.name} className="w-full h-40 object-cover sm:h-48" />
                        </div>
                        {/* Informações do produto relacionado (transparentes) */}
                        <div className="p-1">
                            <h3 className="text-xs sm:text-sm text-gray-500">{prod.category.split('|')[0].trim()}</h3>
                            <p className="text-sm sm:text-base font-semibold text-gray-800 mb-1 sm:mb-2">{prod.name}</p>
                            <div className="flex items-baseline space-x-2">
                                <span className="text-base sm:text-lg font-bold text-black">{prod.currentPrice}</span>
                                {prod.oldPrice && (
                                    <span className="text-xs sm:text-sm text-gray-500 line-through">{prod.oldPrice}</span>
                                )}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
            </div>

            <button
                onClick={() => scrollCarousel('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100 transition-colors z-10 hidden md:block" // Esconde em mobile
                aria-label="Rolar para a direita"
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5 15.75 12l-7.5 7.5" />
            </svg>
            </button>
        </div>
        </div>
    </div>
    </div>
);
}

export default ProductDetailsPage;  
