// src/pages/CompraProdutos.jsx
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

// Importe a imagem do produto, se necessário (ou use um placeholder por enquanto)
import producImage5Preview from '../assets/images/produtos/produc-image-5-removebg-preview.png';

// Dados mockados para um item no carrinho (você pode expandir isso)
const mockCartItem = {
    id: 1,
    name: "Tênis Nike Revolution 6 Next Nature Masculino",
    color: "Vermelho / Branco",
    size: 42,
    quantity: 1, // Manter a quantidade para exibição visual
    unitPrice: 219.00,
    imageUrl: producImage5Preview,
};

// Dados mockados para produtos relacionados (reaproveitando do ProductDetailsPage)
const mockRelatedProducts = {
    '1': {
        id: 1, name: "Tênis Nike Revolution 6 Next Nature Masculino", category: "Casual | Nike", ref: "REF:38416666", rating: 4.7, reviews: 90,
        currentPrice: "R$ 219,00", oldPrice: "299,00", description: "...", mainImageUrl: producImage5Preview,
        thumbnailImages: [producImage5Preview, producImage5Preview, producImage5Preview, producImage5Preview, producImage5Preview],
        sizes: [39, 40, 41, 42, 43], colors: ['#FF0000', '#00FFFF', '#FFA500', '#800080'],
    },
    '2': {
        id: 2, name: "Tênis K-Swiss V8 - Masculino", category: "Tênis", ref: "REF:87654321", rating: 4.2, reviews: 75,
        currentPrice: "$100", oldPrice: "$200", discount: "30%", description: "Um tênis excelente...",
        mainImageUrl: producImage5Preview,
        thumbnailImages: [producImage5Preview, producImage5Preview, producImage5Preview, producImage5Preview, producImage5Preview],
        sizes: [38, 39, 40, 41, 42], colors: ['#0000FF', '#FFFF00'],
    },
    '3': {
        id: 3, name: "Tênis Esportivo Pro", category: "Esporte", ref: "REF:90123456", rating: 4.5, reviews: 120,
        currentPrice: "$100", oldPrice: "$200", discount: "30%", description: "Ideal para alta performance...",
        mainImageUrl: producImage5Preview,
        thumbnailImages: [producImage5Preview, producImage5Preview, producImage5Preview, producImage5Preview, producImage5Preview],
        sizes: [39, 40, 41], colors: ['#00FF00'],
    },
    '4': {
        id: 4, name: "Sandália Verão", category: "Casual", ref: "REF:11223344", rating: 3.9, reviews: 50,
        currentPrice: "$70", oldPrice: null, discount: null, description: "Perfeita para os dias quentes...",
        mainImageUrl: producImage5Preview,
        thumbnailImages: [producImage5Preview, producImage5Preview, producImage5Preview, producImage5Preview, producImage5Preview],
        sizes: [35, 36, 37, 38], colors: ['#FFC0CB'],
    },
    // Adicione mais produtos mockados para o carrossel se precisar de mais itens visíveis
};

// Adaptação da função para produtos relacionados, filtrando o item do carrinho se ele for o mesmo.
const getRelatedProductsForCarousel = (allProducts, cartProductId, repeatCount = 3) => {
    const filteredProducts = Object.values(allProducts).filter(p => p.id !== cartProductId);
    let repeatingList = [];
    for (let i = 0; i < repeatCount; i++) {
        repeatingList = repeatingList.concat(filteredProducts);
    }
    return repeatingList.map((p, index) => ({ ...p, uniqueCarouselId: `${p.id}-${index}` }));
};


function CompraProdutos() {
    const [cartItem, setCartItem] = useState(mockCartItem);
    const carouselRef = useRef(null);

    // Calcula os totais com base no item mockado
    // O subtotal é o preço unitário, já que a quantidade não será interativa
    const subtotal = cartItem ? cartItem.unitPrice : 0;
    const frete = 0.00;
    const desconto = 30.00;
    const total = subtotal + frete - desconto;

    // Função para rolar o carrossel de produtos relacionados (copiado de ProductDetailsPage)
    const scrollCarousel = (direction) => {
        if (carouselRef.current) {
            const firstCard = carouselRef.current.querySelector('.flex-none');
            if (!firstCard) return;

            const cardWidth = firstCard.offsetWidth;
            const cardMarginRight = 16;
            const cardTotalWidth = cardWidth + cardMarginRight;

            let scrollAmount;

            if (window.innerWidth >= 768) { // md breakpoint é 768px
                scrollAmount = cardTotalWidth;
            } else {
                scrollAmount = cardTotalWidth * 2;
            }

            if (direction === 'left') {
                carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    // A função handleQuantityChange foi removida, pois não haverá interação de quantidade.
    // Os botões de +/- existirão, mas sem funcionalidade de clique para alterar o estado.

    // Remove o item do carrinho (simulado)
    const handleRemoveItem = () => {
        setCartItem(null);
    };


    // Garante que o carrossel ainda funcione mesmo se o carrinho estiver vazio
    const productsForCarousel = getRelatedProductsForCarousel(mockRelatedProducts, cartItem?.id);

    return (
        <div className="bg-page-background py-8 font-inter relative">
            <div className="container mx-auto px-4 md:pb-0">
                {/* Breadcrumbs (Navegação hierárquica) - Mantido igual */}
                <div className="text-gray-600 text-sm mb-6">
                    <Link to="/" className="hover:underline">Home</Link> /
                    <Link to="/produtos" className="hover:underline"> Produtos</Link> /
                    <span className="font-semibold text-gray-800">Meu Carrinho</span>
                </div>

                <div className="lg:flex lg:gap-8">
                    {/* Coluna da Esquerda: Meu Carrinho + Cupom/Frete (Desktop) / ou separadas (Mobile) */}
                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                            {cartItem ? (
                                <div className="pb-6">
                                    {/* Cabeçalho da tabela (visível apenas em telas maiores que md) */}
                                    <div className="hidden md:grid md:grid-cols-12 text-gray-500 text-sm font-semibold mb-4 border-b pb-2">
                                        <div className="col-span-5">MEU CARRINHO</div>
                                        <div className="col-span-3 text-center">QUANTIDADE</div> {/* Mantido o col-span */}
                                        <div className="col-span-2 text-right">UNITÁRIO</div>
                                        <div className="col-span-2 text-right">TOTAL</div>
                                    </div>

                                    {/* Item do Carrinho - RESPONSIVO */}
                                    <div className="flex flex-col md:grid md:grid-cols-12 items-start md:items-center gap-2 md:gap-4 py-4 border-b last:border-b-0">
                                        {/* Imagem e Detalhes do Produto */}
                                        <div className="flex items-center col-span-12 md:col-span-5 w-full">
                                            <img src={cartItem.imageUrl} alt={cartItem.name} className="w-24 h-24 object-contain mr-4 rounded-md bg-purple-100 p-2" />
                                            <div>
                                                <h2 className="font-semibold text-gray-900 text-base">{cartItem.name}</h2>
                                                <p className="text-sm text-gray-600">Cor: {cartItem.color}</p>
                                                <p className="text-sm text-gray-600">Tamanho: {cartItem.size}</p>
                                            </div>
                                        </div>

                                        {/* Quantidade e Remover Item - DIV PRINCIPAL NESTA SEÇÃO */}
                                        <div className="col-span-12 md:col-span-3 w-full flex flex-col items-center mt-2 md:mt-0">
                                            <div className="flex flex-col w-full items-start md:items-center">
                                                <span className="text-gray-500 text-sm md:hidden mb-1">QUANTIDADE</span>
                                                <div className="flex items-center justify-center w-full md:w-auto mb-2 md:mb-1">
                                                    <button
                                                        // onClick removido para desativar a função de soma
                                                        className="border border-gray-300 rounded-full w-7 h-7 flex items-center justify-center text-gray-700 cursor-not-allowed opacity-50"
                                                        aria-label="Diminuir quantidade"
                                                        disabled // Desabilita o botão
                                                    >-</button>
                                                    <input
                                                        type="text"
                                                        value={cartItem.quantity} // Mantém o valor fixo (1)
                                                        readOnly
                                                        className="w-10 text-center mx-2 border-none focus:ring-0 text-gray-900 text-lg font-semibold"
                                                    />
                                                    <button
                                                        // onClick removido para desativar a função de soma
                                                        className="border border-gray-300 rounded-full w-7 h-7 flex items-center justify-center text-gray-700 cursor-not-allowed opacity-50"
                                                        aria-label="Aumentar quantidade"
                                                        disabled // Desabilita o botão
                                                    >+</button>
                                                </div>
                                            </div>
                                            <button
                                                onClick={handleRemoveItem}
                                                className="text-red-600 hover:text-red-800 text-sm md:text-base font-semibold md:mt-2"
                                            >
                                                Remover Item
                                            </button>
                                        </div>

                                        {/* Preço Unitário - RESPONSIVO */}
                                        <div className="flex justify-between items-center w-full col-span-12 md:col-span-2 md:text-right mt-2 md:mt-0">
                                            <span className="text-gray-500 text-sm md:hidden">UNITÁRIO</span>
                                            <span className="font-semibold text-gray-900 text-lg">R$ {cartItem.unitPrice.toFixed(2).replace('.', ',')}</span>
                                        </div>

                                        {/* Preço Total do Item - RESPONSIVO */}
                                        <div className="flex justify-between items-center w-full col-span-12 md:col-span-2 md:text-right mt-2 md:mt-0">
                                            <span className="text-gray-500 text-sm md:hidden">TOTAL</span>
                                            {/* Agora o total do item é sempre o preço unitário, já que a quantidade é fixa */}
                                            <span className="font-semibold text-black text-lg">R$ {cartItem.unitPrice.toFixed(2).replace('.', ',')}</span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="p-8 text-center text-gray-600">
                                    Seu carrinho está vazio. <Link to="/produtos" className="text-pink-600 hover:underline">Continue comprando!</Link>
                                </div>
                            )}

                            {/* CUPOM DE DESCONTO E CALCULAR FRETE - SOMENTE DESKTOP */}
                            <div className="hidden md:grid md:grid-cols-2 gap-6 border-t pt-6 mt-6">
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Cupom de desconto</h3>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="Insira seu código"
                                            className="flex-grow border border-gray-300 rounded-md p-2 focus:ring-pink-600 focus:border-pink-600"
                                        />
                                        <button className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md hover:bg-pink-600 hover:text-white active:bg-pink-700 transition-colors">
                                            OK
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Calcular Frete</h3>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="Insira seu CEP"
                                            className="flex-grow border border-gray-300 rounded-md p-2 focus:ring-pink-600 focus:border-pink-600"
                                        />
                                        <button className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md hover:bg-pink-600 hover:text-white active:bg-pink-700 transition-colors">
                                            OK
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div> {/* Fim da GRANDE CAIXA para MEU CARRINHO + CUPOM/FRETE (Desktop) */}


                        {/* CUPOM DE DESCONTO E CALCULAR FRETE - SOMENTE MOBILE (Caixas Separadas) */}
                        <div className="flex flex-col gap-y-8 mt-8 md:hidden">
                            {/* CAIXA INDIVIDUAL para Cupom de Desconto (SOMENTE MOBILE) */}
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Cupom de desconto</h3>
                                    <div className="flex flex-col gap-2 items-stretch">
                                        <input
                                            type="text"
                                            placeholder="Insira seu código"
                                            className="flex-grow border border-gray-300 rounded-md p-2 focus:ring-pink-600 focus:border-pink-600"
                                        />
                                        <button className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md hover:bg-pink-600 hover:text-white active:bg-pink-700 transition-colors mt-2">
                                            OK
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* CAIXA INDIVIDUAL para Calcular Frete (SOMENTE MOBILE) */}
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Calcular Frete</h3>
                                    <div className="flex flex-col gap-2 items-stretch">
                                        <input
                                            type="text"
                                            placeholder="Insira seu CEP"
                                            className="flex-grow border border-gray-300 rounded-md p-2 focus:ring-pink-600 focus:border-pink-600"
                                        />
                                        <button className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md hover:bg-pink-600 hover:text-white active:bg-pink-700 transition-colors mt-2">
                                            OK
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div> {/* Fim do contêiner SOMENTE MOBILE */}


                        {/* Produtos Relacionados - OCULTADO NO MOBILE, VISÍVEL NO DESKTOP */}
                        <div className="mt-8 hidden md:block">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex justify-between items-center">
                                Produtos Relacionados
                                <Link to="/produtos" className="text-pink-600 text-sm font-semibold hover:underline flex items-center">
                                    Ver todos
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </Link>
                            </h2>

                            <div className="relative">
                                <button
                                    onClick={() => scrollCarousel('left')}
                                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100 transition-colors z-10 hidden md:block"
                                    aria-label="Rolar para a esquerda"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                    </svg>
                                </button>

                                <div
                                    ref={carouselRef}
                                    className="flex overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide gap-x-4 px-4 py-2"
                                >
                                    {productsForCarousel.map(prod => (
                                        <Link
                                            to={`/produtos/${prod.id}`}
                                            key={prod.uniqueCarouselId}
                                            className="flex-none w-[calc(50%-0.5rem)] sm:w-[calc(33.33%-0.66rem)] md:w-[calc(25%-0.75rem)]"
                                        >
                                            <div className="overflow-hidden relative pb-4">
                                                {prod.discount && (
                                                    <span className="absolute top-2 left-2 bg-green-200 text-green-900 text-xs font-bold px-2 py-1 rounded-full z-10">
                                                        {prod.discount} OFF
                                                    </span>
                                                )}
                                                <div className="bg-white rounded-lg p-4 mb-2 shadow-sm">
                                                    <img src={prod.mainImageUrl || prod.thumbnailImages[0]} alt={prod.name} className="w-full h-40 object-contain sm:h-48" />
                                                </div>
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
                                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100 transition-colors z-10 hidden md:block"
                                    aria-label="Rolar para a direita"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5 15.75 12l-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* COLUNA DA DIREITA RESPONSIVA (AGORA APENAS COM A CAIXA DE RESUMO DO DESKTOP) */}
                    <div className="lg:w-1/3 mt-8 lg:mt-0">
                        {/* CAIXA DE RESUMO - STICKY PARA DESKTOP, NORMAL PARA MOBILE */}
                        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 sticky top-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b">RESUMO</h2>
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-gray-700">
                                    <span>Subtotal:</span>
                                    <span className="font-semibold">R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                                </div>
                                <div className="flex justify-between text-gray-700">
                                    <span>Frete:</span>
                                    <span className="font-semibold">R$ {frete.toFixed(2).replace('.', ',')}</span>
                                </div>
                                <div className="flex justify-between text-gray-700">
                                    <span>Desconto:</span>
                                    <span className="font-semibold text-red-600">- R$ {desconto.toFixed(2).replace('.', ',')}</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold text-black pt-2 border-t mt-3">
                                    <span>Total</span>
                                    <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                                </div>
                                <p className="text-sm text-gray-500 text-right mt-1">ou 10x de R$ {(total / 10).toFixed(2).replace('.', ',')} sem juros</p>
                            </div>
                            {/* BOTÃO CONTINUAR - Visível em desktop, oculto em mobile */}
                            <button className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-200 text-lg shadow-md hidden md:block">
                                Continuar
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* NOVA CAIXA PARA O TOTAL FINAL E BOTÃO CONTINUAR - SOMENTE MOBILE (STICKY NO BOTTOM) */}
            <div className="p-4 bg-white shadow-lg sticky bor bottom-0 left-0 right-0 md:hidden z-40 border-t border-gray-200"
                style={{ marginBottom: '0' }}
            >
                <div className="flex justify-between text-lg font-bold text-black mb-2">
                    <span>Total</span>
                    <span className="text-red-600">R$ {total.toFixed(2).replace('.', ',')}</span>
                </div>
                <p className="text-sm text-gray-500 text-right mb-4">ou 10x de <span className="font-bold text-black">R$ {(total / 10).toFixed(2).replace('.', ',')}</span> sem juros</p>
                <button className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-200 text-lg shadow-md">
                    Continuar
                </button>
            </div>
        </div>
    );
}

export default CompraProdutos;



