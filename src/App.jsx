import React from 'react';
import { Link } from 'react-router-dom';
import AppRoutes from './routes/Routes'; // Importa seu componente de rotas
import './index.css'; 

function App() {
  return (
    <div className="app-container flex flex-col min-h-screen font-sans">
      <header className="bg-gray-800 text-white p-4 shadow-md rounded-b-lg">
        <nav className="flex justify-center space-x-6">
          <Link to="/" className="text-lg font-semibold hover:text-blue-300 transition duration-300 rounded-md px-3 py-2">
            Home
          </Link>
          <Link to="/produtos" className="text-lg font-semibold hover:text-green-300 transition duration-300 rounded-md px-3 py-2">
            Produtos
          </Link>
          <Link to="/cadastro" className="text-lg font-semibold hover:text-purple-300 transition duration-300 rounded-md px-3 py-2">
            Cadastro
          </Link>
        </nav>
      </header>

      <main className="flex-grow p-6">
        <AppRoutes />
      </main>

      <footer className="bg-gray-200 text-gray-700 p-4 text-center mt-auto rounded-t-lg shadow-inner">
        &copy; 2025 Meu Projeto Simples
      </footer>
    </div>
  );
}

export default App;