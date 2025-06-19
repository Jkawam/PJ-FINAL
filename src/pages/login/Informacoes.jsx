import React, { useState } from 'react';

const Informacoes = () => {
  const [form, setForm] = useState({
    nome: '',
    cpf: '',
    email: '',
    celular: '',
    endereco: '',
    bairro: '',
    cidade: '',
    cep: '',
    complemento: '',
    aceitarEmails: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', form);

  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Criar Conta</h2>

        {/* Informações Pessoais */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
          <h3 className="font-semibold text-lg text-gray-800">Informações Pessoais</h3>
          <hr className="border-t border-gray-300 my-2" />

          <div>
            <input
              id="nome"
              name="nome"
              placeholder="Nome completo"
              value={form.nome}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-pink-500 focus:border-pink-500 bg-gray-50"
            />
          </div>
          <div>
            <input
              id="cpf"
              name="cpf"
              placeholder="CPF"
              value={form.cpf}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-pink-500 focus:border-pink-500 bg-gray-50"
            />
          </div>
          <div>
            <input
              id="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-pink-500 focus:border-pink-500 bg-gray-50"
            />
          </div>
          <div>
            <input
              id="celular"
              name="celular"
              placeholder="Celular"
              value={form.celular}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-pink-500 focus:border-pink-500 bg-gray-50"
            />
          </div>
        </div>

        {/* Informações de Entrega */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
          <h3 className="font-semibold text-lg text-gray-800">Informações de Entrega</h3>
          <hr className="border-t border-gray-300 my-2" />

          <div>
            <input
              id="endereco"
              name="endereco"
              placeholder="Endereço"
              value={form.endereco}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-pink-500 focus:border-pink-500 bg-gray-50"
            />
          </div>
          <div>
            <input
              id="bairro"
              name="bairro"
              placeholder="Bairro"
              value={form.bairro}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-pink-500 focus:border-pink-500 bg-gray-50"
            />
          </div>
          <div>
            <input
              id="cidade"
              name="cidade"
              placeholder="Cidade"
              value={form.cidade}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-pink-500 focus:border-pink-500 bg-gray-50"
            />
          </div>
          <div>
            <input
              id="cep"
              name="cep"
              placeholder="CEP"
              value={form.cep}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-pink-500 focus:border-pink-500 bg-gray-50"
            />
          </div>
          <div>
            <input
              id="complemento"
              name="complemento"
              placeholder="Complemento (Opcional)"
              value={form.complemento}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-pink-500 focus:border-pink-500 bg-gray-50"
            />
          </div>
        </div>

        {/* Checkbox customizada */}
        <div className="space-y-4">
          <label htmlFor="aceitarEmails" className="flex items-center cursor-pointer select-none">
            <input
              id="aceitarEmails"
              name="aceitarEmails"
              type="checkbox"
              checked={form.aceitarEmails}
              onChange={handleChange}
              className="hidden"
            />
            <span
              className={`
                w-6 h-6 inline-block mr-3 rounded border-2 border-gray-400
                flex-shrink-0
                transition-colors duration-300 ease-in-out items-center justify-center
                ${form.aceitarEmails ? 'bg-pink-600 border-pink-600' : 'bg-white'}
              `}
            >
              {form.aceitarEmails && (
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </span>
            <span className="text-gray-600 text-sm">
              Quero receber por email ofertas e novidades das lojas da Digital Store.
            </span>
          </label>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
          >
            Criar Conta
          </button>
        </div>
      </form>
    </div>
  );
};

export default Informacoes;
