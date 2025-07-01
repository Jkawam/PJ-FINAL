// src/App.js
import React from 'react';
import { Link } from 'react-router-dom';
import AppRoutes from './routes/Routes'; // Importa seu componente de rotas
import './index.css'; 

function App() {
  return (
    // Certifique-se de que este 'div' não tem nenhuma das propriedades CSS problemáticas
    <div className="app-container flex flex-col min-h-screen font-sans">
      {/* SEU CABEÇALHO COM AS CLASSES FIXAS */}
      <header className="bg-gray-800 text-white p-4 shadow-md rounded-b-lg 
                            fixed top-0 left-0 w-full z-50"> {/* <-- Adicionadas estas classes para fixar */}
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

      <main className="flex-grow p-6 mt-16"> {/* <-- Adicionado mt-16 para empurrar o conteúdo para baixo */}
        <AppRoutes /> {/* O AppRoutes agora gerencia a rolagem para o topo */}
      </main>

      <footer className="bg-gray-200 text-gray-700 p-4 text-center mt-auto rounded-t-lg shadow-inner">
        &copy; 2025 Meu Projeto Simples
      </footer>
    </div>
  );
}

export default App;


