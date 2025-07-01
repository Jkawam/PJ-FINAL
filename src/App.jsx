// src/App.js
import React from 'react';
import { Link } from 'react-router-dom';
import AppRoutes from './routes/Routes'; // Importa seu componente de rotas
import './index.css'; 

function App() {
  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;


