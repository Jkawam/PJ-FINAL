import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainLayout() {
  const location = useLocation();
  const hideHeader = ["/cadastro", "/entrar", "/Informacoes"].includes(location.pathname);

  const applyMainPadding = !hideHeader;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header opcional */}
      {!hideHeader && <Header />}

      {/* Conteúdo principal */}
      <main className={`flex-grow ${applyMainPadding ? 'p-6' : ''}`}>
        <Outlet />
      </main>

      {/* Footer sempre visível */}
      <Footer />
    </div>
  );
}

export default MainLayout;
