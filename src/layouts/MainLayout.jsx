// src/layouts/MainLayout.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header'; // Orquestrador de headers
import Footer from '../components/Footer'; // Orquestrador de footers

function MainLayout() {
  const location = useLocation();
  const hideHeaderFooter = ["/cadastro", "/entrar", "/Informacoes"].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
       {!hideHeaderFooter && <Header />}
      {/* Header dinâmico */}
      

      {/* Conteúdo principal das rotas */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer dinâmico para mobile e desktop */}
      { <Footer />}
    </div>
  );
}

export default MainLayout;
