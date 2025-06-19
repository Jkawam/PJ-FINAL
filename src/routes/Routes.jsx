import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importe seu componente de Layout
import MainLayout from '../layouts/MainLayout';

// Importe suas páginas
import Home from '../pages/Home';
import Produtos from '../pages/Produtos';
import Categorias from '../pages/Categorias';
import MeusPedidos from '../pages/pedidos';
import ProductDetailsPage from '../pages/ProductDetailsPage'; // Importe o componente ProductDetailsPage
import CompraProdutos from '../pages/compraprodutos'; // Importe a nova página de compra de produtos
import Cadastro from '../pages/login/Cadastro'; // Importe o componente Cadastro
import Entrar from '../pages/login/Entrar'; // Importe o componente Entrar
import Informacoes from '../pages/login/Informacoes'; // Importe o componente Informacoes
import MeuPerfil from '../pages/pedidos/MeuPerfil'; // Importe o componente MeuPerfil
import MinhasInformacoes from '../pages/pedidos/MinhasInformaçoes'; 
import Pagamento from '../pages/pedidos/Pagamento'; // Importe o componente Pagamento

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
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="informacoes" element={<Informacoes />} />
          <Route path="entrar" element={<Entrar />} />
          {/* Rota para Meus Pedidos, aninhada sob o MainLayout */}
          <Route path="meus-pedidos" element={<MeusPedidos />} />
          <Route path="produtos/:id" element={<ProductDetailsPage />} />
          <Route path="compraprodutos" element={<CompraProdutos />} /> {/* Rota para a nova página */}
          <Route path="meu-perfil" element={<MeuPerfil />} /> {/* Rota para Meu Perfil */}
          <Route path="minhas-informacoes" element={<MinhasInformacoes />} /> {/* Rota para Minhas Informações */}
          <Route path="pagamento" element={<Pagamento />} /> {/* Rota para Pagamento */}

          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;