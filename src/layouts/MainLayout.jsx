import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderLogin from '../pages/login/Header-login';

function MainLayout() {
  const location = useLocation();
  const loginRoutes = ["/cadastro", "/entrar", "/Informacoes"];
  const isLoginRoute = loginRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Mostra HeaderLogin nas rotas de login/cadastro, e Header nas demais */}
      {isLoginRoute ? <HeaderLogin /> : <Header />}

      {/* Conteúdo principal */}
      <main className={`flex-grow ${!isLoginRoute ? 'p-6' : ''}`}>
        <Outlet />
      </main>

      {/* Footer sempre visível */}
      <Footer />
    </div>
  );
}

export default MainLayout;
