// src/layouts/MainLayout.jsx
import React from 'react'; // Não precisa mais de useRef, useEffect, useState
import { Outlet } from 'react-router-dom';
import Header from '../components/Header'; // Orquestrador de headers
import Footer from '../components/Footer'; // Orquestrador de footers

function MainLayout() {
  // Removida toda a lógica de estado e ref para altura do footer/barra fixa.
  // Não há mais padding-bottom dinâmico no main para barras fixas.

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header dinâmico */}
      <Header />

      {/* Conteúdo principal das rotas */}
      {/* padding-bottom volta ao padrão de p-6 */}
      <main className="flex-grow p-6"> 
        <Outlet />
      </main>

      {/* Footer dinâmico para mobile e desktop */}
      {/* Não precisa mais passar ref para o Footer aqui */}
      <Footer /> 
    </div>
  );
}

export default MainLayout;