import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden relative">
      {/* Badge de Desconto (se houver) */}
      {product.discount && (
        <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          {product.discount} OFF
        </span>
      )}

      {/* Imagem do Produto - Altura ajustada para cards maiores */}
      <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover sm:h-64" />

      {/* Detalhes do Produto */}
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
    </div>
  );
}

export default ProductCard;