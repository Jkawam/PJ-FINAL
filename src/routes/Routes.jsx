// src/routes/Routes.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importe seu componente de Layout
import MainLayout from '../layouts/MainLayout';

// Importe suas páginas
import Home from '../pages/Home';
import Produtos from '../pages/Produtos'; // <<<<< NOVO: Importe a página de Produtos
import Categorias from '../pages/categorias';
import MeusPedidos from '../pages/pedidos';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota Pai para o Layout */}
        <Route path="/" element={<MainLayout />}>
          {/* Rotas Filhas que usarão o MainLayout */}
          <Route index element={<Home />} />
          <Route path="produtos" element={<Produtos />} /> {/* <<<<< NOVO: Rota para Produtos */}
          <Route path="categorias" element={<Categorias />} />
          <Route path="meus-pedidos" element={<MeusPedidos />} />
          {/* Adicione suas outras rotas aqui como filhas do Layout */}
          {/* Lembre-se que no Header.jsx, você já tem Links para estas rotas: */}
          {/* <Route path="categorias" element={<Categorias />} /> */}
          {/* <Route path="meus-pedidos" element={<MeusPedidos />} /> */}
          {/* <Route path="cadastro" element={<Cadastro />} /> */}
          {/* <Route path="entrar" element={<Entrar />} /> */}
          {/* <Route path="carrinho" element={<Carrinho />} /> */}

          {/* Opcional: Rota para Not Found se houver uma (dentro do layout) */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;