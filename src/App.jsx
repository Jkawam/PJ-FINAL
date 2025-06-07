import React from 'react';
import { Link } from 'react-router-dom'; 
import AppRoutes from './routes/Routes'; 

function App() {
  return (
    <div className="app-container">
      <header className="bg-gray-800 text-white p-4 shadow-md">
        <nav className="flex justify-center space-x-6">
          <Link to="/" className="text-lg font-semibold hover:text-blue-300 transition duration-300">
            Home
          </Link>
          <Link to="/contact" className="text-lg font-semibold hover:text-green-300 transition duration-300">
            Produtos
          </Link>
        </nav>
      </header>

      <main>
        <AppRoutes /> 
      </main>

      <footer className="bg-gray-200 text-gray-700 p-4 text-center mt-auto">
        &copy; 2025 Meu Projeto Simples
      </footer>
    </div>
  );
}

export default App;