import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header'; // Orquestrador de headers
import Footer from '../components/Footer'; // Orquestrador de footers

function MainLayout() {
  const location = useLocation();
  const hideHeaderFooter = ["/cadastro", "/entrar", "/Informacoes"].includes(location.pathname); // Corrigi para /Informacoes
  
  // Define se o padding deve ser aplicado ao main
  // Queremos padding em todas as páginas, exceto nas que o fundo é "total" (como /cadastro)
  const applyMainPadding = !["/cadastro", "/entrar", "/Informacoes"].includes(location.pathname); 

  return (
    <div className="flex flex-col min-h-screen">
      {!hideHeaderFooter && <Header />}
      {/* Header dinâmico */}

      {/* Conteúdo principal das rotas */}
      {/* O padding agora é condicional */}
      <main className={`flex-grow ${applyMainPadding ? 'p-6' : ''}`}>
        <Outlet />
      </main>

      {/* Footer dinâmico para mobile e desktop */}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default MainLayout;