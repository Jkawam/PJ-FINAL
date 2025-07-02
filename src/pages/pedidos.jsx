import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../functions/nav';

// CAMINHO DA IMAGEM CORRIGIDO AQUI
import tenisImage from '../assets/images/produtos/produc-image-5-removebg-preview.png';

const pedidos = [
  { id: '2234691032', status: 'Produto em trânsito', statusColor: 'text-orange-500' },
  { id: '4495810492', status: 'Finalizado', statusColor: 'text-gray-500' },
  { id: '4495810492', status: 'Cancelado', statusColor: 'text-pink-500' },
  { id: '4495810492', status: 'Finalizado', statusColor: 'text-gray-500' },
  { id: '4495810492', status: 'Finalizado', statusColor: 'text-gray-500' },
];

function Pedidos() {
  return (
    <div className="px-4 py-8 md:grid md:grid-cols-[250px_1fr] gap-6">
      {/* Barra lateral */}
      <Nav />

      {/* Conteúdo principal */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-6">Meus Pedidos</h3>

        {/* Cabeçalho da tabela (só em desktop) */}
        <div className="hidden md:grid md:grid-cols-[1fr_150px] gap-4 border-b pb-2 text-sm font-medium text-gray-600 mb-2 items-center">
          <span>Produto</span>
          <span>Status</span>
        </div>

        <ul>
          {pedidos.map((pedido, index) => (
            <li
              key={index}
              className="py-4 border-b border-gray-200 md:grid md:grid-cols-[1fr_150px] md:gap-4"
            >
              <div className="flex gap-4 items-start ">
                <img
                  // A variável importada é usada aqui, como antes.
                  src={tenisImage}
                  alt="Tênis"
                  className="w-16 h-16 rounded object-cover border bg-violet-200"
                />

                <div className="flex-1">
                  <p className="text-xs text-gray-500">Pedido n° {pedido.id}</p>
                  <p className="font-semibold text-sm">
                    Tênis Nike Revolution 6 Next Nature Masculino
                  </p>

                  {/* Status no mobile */}
                  <div className="flex items-center gap-1 mt-2 md:hidden">
                    <p className="text-xs text-gray-400">STATUS:</p>
                    <p className={`text-sm font-semibold ${pedido.statusColor}`}>
                      {pedido.status}
                    </p>
                  </div>
                </div>
              </div>

              {/* Status no desktop */}
              <div className={`hidden md:flex items-center justify-end font-semibold ${pedido.statusColor}`}>
                {pedido.status}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Pedidos;
