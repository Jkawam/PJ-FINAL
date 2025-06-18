import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importe seu componente de Layout
import MainLayout from '../layouts/MainLayout';

// Importe suas páginas
import Home from '../pages/Home';
import Produtos from '../pages/Produtos';
import Categorias from '../pages/categorias';
import MeusPedidos from '../pages/pedidos';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import CompraProdutos from '../pages/compraprodutos'; // Importe a nova página de compra de produtos

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota Pai para o Layout */}
        <Route path="/" element={<MainLayout />}>
          {/* Rotas Filhas que usarão o MainLayout */}
          <Route index element={<Home />} />
          <Route path="produtos" element={<Produtos />} />
          <Route path="categorias" element={<Categorias />} />
          <Route path="meus-pedidos" element={<MeusPedidos />} />
          <Route path="produtos/:id" element={<ProductDetailsPage />} />
          <Route path="compraprodutos" element={<CompraProdutos />} /> {/* Rota para a nova página */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;