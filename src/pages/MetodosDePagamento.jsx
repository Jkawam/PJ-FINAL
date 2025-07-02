import React from 'react';

function MetodosDePagamento() {
  return (
    <div className="mx-auto px-2 py-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Métodos de Pagamento
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p>Aqui você poderá gerenciar seus cartões de crédito e outras formas de pagamento.</p>
        
        {/* Botão centralizado apenas no mobile */}
        <button className="mt-6 block mx-auto md:inline-block md:mx-0 bg-pink-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-700 transition">
          Adicionar novo cartão
        </button>
      </div>
    </div>
  );
}

export default MetodosDePagamento;