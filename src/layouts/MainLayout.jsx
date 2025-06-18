import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header'; // Orquestrador de headers
import Footer from '../components/Footer'; // Orquestrador de footers

function MainLayout() {
  const location = useLocation();
  const hideHeaderFooter = ["/cadastro", "/entrar", "//Informacoes"].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideHeaderFooter && <Header />}
      {/* Header dinâmico */}

      {/* Conteúdo principal das rotas */}
      {/* padding-bottom volta ao padrão de p-6 */}
      <main className="flex-grow p-6">
        <Outlet />
      </main>

      {/* Footer dinâmico para mobile e desktop */}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default MainLayout;