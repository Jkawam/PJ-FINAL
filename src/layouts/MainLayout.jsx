// src/layouts/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header'; // Orquestrador de headers
import Footer from '../components/Footer'; // Orquestrador de footers

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header dinâmico */}
      <Header />

      {/* Conteúdo principal das rotas */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer dinâmico para mobile e desktop */}
      <Footer />
    </div>
  );
}

export default MainLayout;
