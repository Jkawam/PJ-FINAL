import React from 'react';

function Pedidos() { 
return (
    <div className="px-6 py-10">
  <div className="px-6 py-12 bg-white rounded-lg shadow-md">
    <div className="flex items-center justify-between mb-6">
      
      {/* Título à esquerda */}
      <h3 className="font-bold text-xl">Meus Pedidos</h3>

      {/* Botões à direita */}
      <div className="flex gap-2">
        <button
          className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-200 hover:text-pink-600 h-9 px-3"
        >
          Todos
        </button>
        <button
          className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-200 hover:text-pink-600 h-9 px-3"
        >
          Em Trânsito
        </button>
        <button
          className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-200 hover:text-pink-600 h-9 px-3"
        >
          Finalizados
        </button>
        <button
          className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-200 hover:text-pink-600 h-9 px-3"
        >
          Cancelados
        </button>
      </div>

    </div>
  </div>
</div>

);
}

export default Pedidos; 