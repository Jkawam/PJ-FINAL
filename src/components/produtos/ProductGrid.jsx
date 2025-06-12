import React from 'react';
import ProductCard from './ProductCard';

// IMPORTAR IMAGENS LOCAIS AQUI
// O caminho é '../../assets/images/produtos/' a partir de src/components/produtos/

import producimage5removebgpreview from '../../assets/images/produtos/produc-image-5-removebg-preview.png';


function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "K-Swiss V8 - Masculino",
      category: "Tênis",
      imageUrl: producimage5removebgpreview,
      currentPrice: "$100",
      oldPrice: "$200",
      discount: "30%"
    },
    {
      id: 2,
      name: "K-Swiss V8 - Masculino",
      category: "Tênis",
      imageUrl: producimage5removebgpreview,
      currentPrice: "$100",
      oldPrice: "$200",
      discount: "30%"
    },
    {
      id: 3,
      name: "K-Swiss V8 - Masculino",
      category: "Tênis",
      imageUrl: producimage5removebgpreview,
      currentPrice: "$100",
      oldPrice: "$200",
      discount: "30%"
    },
    {
      id: 4,
      name: "K-Swiss V8 - Masculino",
      category: "Tênis",
      imageUrl:producimage5removebgpreview, // Reutilizando a imagem
      currentPrice: "$100",
      oldPrice: "$200",
      discount: null
    },
    {
      id: 5,
      name: "K-Swiss V8 - Masculino",
      category: "Tênis",
      imageUrl: producimage5removebgpreview, // Reutilizando a imagem
      currentPrice: "$100",
      oldPrice: "$200",
      discount: null
    },
    {
      id: 6,
      name: "K-Swiss V8 - Masculino",
      category: "Tênis",
      imageUrl: producimage5removebgpreview, // Reutilizando a imagem
      currentPrice: "$100",
      oldPrice: "$200",
      discount: null
    },
    {
      id: 7,
      name: "K-Swiss V8 - Masculino",
      category: "Tênis",
      imageUrl: producimage5removebgpreview, // Reutilizando a imagem
      currentPrice: "$100",
      oldPrice: "$200",
      discount: null
    },
    {
      id: 8,
      name: "K-Swiss V8 - Masculino",
      category: "Tênis",
      imageUrl: producimage5removebgpreview, // Reutilizando a imagem
      currentPrice: "$100",
      oldPrice: "$200",
      discount: null
    },
    {
      id: 9,
      name: "K-Swiss V8 - Masculino",
      category: "Tênis",
      imageUrl: producimage5removebgpreview, // Reutilizando a imagem
      currentPrice: "$100",
      oldPrice: "$200",
      discount: null
    },
  ];

  return (
    <div>
      {/* Grade de Produtos */}
      {/* Mobile: 2 colunas. Tablet/SM: 2 colunas. Desktop: 3 colunas. */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;