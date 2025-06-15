import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link, se já não estiver importado

function ProductCard({ product }) {
  return (
    // Removidas as classes 'bg-white rounded-lg shadow-sm' do contêiner principal
    // O contêiner principal agora serve apenas como wrapper flexível e relativo
    <Link to={`/produtos/${product.id}`} className="block overflow-hidden relative">
      {/* Badge de Desconto (se houver) */}
      {product.discount && (
        <span className="absolute top-2 left-2 bg-green-200 text-green-900 text-xs font-bold px-2 py-1 rounded-full z-10">
          {product.discount} OFF
        </span>
      )}

      {/* Nova div que envolve APENAS a imagem com fundo e arredondamento */}
      <div className="bg-white rounded-lg p-4 mb-2"> {/* Adicionado bg-purple-100, rounded-lg, p-4 e mb-2 */}
        {/* Imagem do Produto - Altura ajustada para cards maiores */}
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-56 object-cover sm:h-64 rounded-lg" // Manter rounded-lg na imagem se quiser que ela também tenha cantos arredondados dentro da caixa
        />
      </div>

      {/* Detalhes do Produto - Mantidos transparentes */}
      <div className="p-3 sm:p-4">
        <h3 className="text-xs sm:text-sm text-gray-500">{product.category}</h3>
        <p className="text-sm sm:text-base font-semibold text-gray-800 mb-1 sm:mb-2">{product.name}</p>
        
        <div className="flex items-baseline space-x-2">
          <span className="text-base sm:text-lg font-bold text-black">{product.currentPrice}</span>
          {product.oldPrice && (
            <span className="text-xs sm:text-sm text-gray-500 line-through">{product.oldPrice}</span> 
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;