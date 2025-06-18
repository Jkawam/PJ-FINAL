import React from 'react';

const Informacoes = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Criar Conta</h2>

        {/* Card do formulário */}
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
          {/* Seção: Informações Pessoais */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Informações Pessoais</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Nome Completo</label>
                <input type="text" className="w-full border border-gray-300 rounded-md p-2" placeholder="Insira seu nome" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">CPF</label>
                <input type="text" className="w-full border border-gray-300 rounded-md p-2" placeholder="Insira seu CPF" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded-md p-2" placeholder="Insira seu email" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Celular</label>
                <input type="text" className="w-full border border-gray-300 rounded-md p-2" placeholder="Insira seu celular" />
              </div>
            </div>
          </div>

          {/* Seção: Informações de Endereço */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Informações de Entrega</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Endereço</label>
                <input type="text" className="w-full border border-gray-300 rounded-md p-2" placeholder="Insira seu endereço" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Bairro</label>
                <input type="text" className="w-full border border-gray-300 rounded-md p-2" placeholder="Insira seu bairro" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Cidade</label>
                <input type="text" className="w-full border border-gray-300 rounded-md p-2" placeholder="Insira sua cidade" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">CEP</label>
                <input type="text" className="w-full border border-gray-300 rounded-md p-2" placeholder="Insira seu CEP" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Complemento</label>
                <input type="text" className="w-full border border-gray-300 rounded-md p-2" placeholder="Insira complemento" />
              </div>
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-start">
            <input id="aceitar" type="checkbox" className="mt-1 mr-2" />
            <label htmlFor="aceitar" className="text-sm text-gray-600">
              Quero receber por email ofertas e novidades das lojas da Digital Store.
            </label>
          </div>

          {/* Botão */}
          <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-md transition">
            Criar Conta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Informacoes;
