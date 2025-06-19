import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import MainLayout from '../layouts/MainLayout';


import Home from '../pages/Home';
import Produtos from '../pages/Produtos';
import Categorias from '../pages/Categorias';
import MeusPedidos from '../pages/pedidos';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import CompraProdutos from '../pages/CompraProdutos';
import Cadastro from '../pages/login/Cadastro';
import Entrar from '../pages/login/Entrar';
import Informacoes from '../pages/login/Informacoes';
import FinalizarCompra from '../pages/produtofinal/FinalizarCompra';
import MeuPerfil from '../pages/pedidos/MeuPerfil';
import MinhasInformacoes from '../pages/pedidos/MinhasInformaçoes';
import Pagamento from '../pages/pedidos/Pagamento';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainLayout />}>

          <Route index element={<Home />} />
          <Route path="produtos" element={<Produtos />} />
          <Route path="produtos/:id" element={<ProductDetailsPage />} />
          <Route path="categorias" element={<Categorias />} />
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="entrar" element={<Entrar />} />
          <Route path="informacoes" element={<Informacoes />} />

          <Route path="meus-pedidos" element={<MeusPedidos />} />
          <Route path="compraprodutos" element={<CompraProdutos />} />
          <Route path="finalizar-compra" element={<FinalizarCompra />} />
          <Route path="meu-perfil" element={<MeuPerfil />} />
          <Route path="minhas-informacoes" element={<MinhasInformacoes />} />
          <Route path="pagamento" element={<Pagamento />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
