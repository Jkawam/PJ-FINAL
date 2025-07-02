import React from 'react';
import { Routes, Route } from 'react-router-dom';

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
import CompraFeita from '../pages/produtofinal/CompraFeita';
import MetodosDePagamento from '../pages/MetodosDePagamento';

function AppRoutes() {
  return (
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
        <Route path="metodos-pagamento" element={<MetodosDePagamento />} />
        <Route path="meu-perfil" element={<MeuPerfil />} />
        <Route path="minhas-informacoes" element={<MinhasInformacoes />} />
        <Route path="pagamento" element={<Pagamento />} />
        <Route path="compra-feita" element={<CompraFeita />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;