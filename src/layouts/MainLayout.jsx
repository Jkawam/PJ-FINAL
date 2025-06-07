// src/layouts/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // Importe Outlet
import Header from '../components/Header'; // Importe seu componente de cabeçalho

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* O cabeçalho sempre estará aqui */}
      <Header />

      {/* Este é o "buraco" onde o conteúdo da rota atual será renderizado */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Opcional: Adicione um rodapé aqui se precisar */}
      {/* <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2025 Digital Store
      </footer> */}
    </div>
  );
}

export default MainLayout;