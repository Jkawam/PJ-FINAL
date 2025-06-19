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
      <form onSubmit={handleSubmit} className="max-w-xl w-full bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Criar Conta</h2>

        {/* Informações Pessoais */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-2">Informações Pessoais</h3>
          <div className="space-y-4">
            <input name="nome" placeholder="Nome completo" value={form.nome} onChange={handleChange} className="w-full border rounded-md p-2" />
            <input name="cpf" placeholder="CPF" value={form.cpf} onChange={handleChange} className="w-full border rounded-md p-2" />
            <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full border rounded-md p-2" />
            <input name="celular" placeholder="Celular" value={form.celular} onChange={handleChange} className="w-full border rounded-md p-2" />
          </div>
        </div>

        {/* Informações de Endereço */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-2">Informações de Entrega</h3>
          <div className="space-y-4">
            <input name="endereco" placeholder="Endereço" value={form.endereco} onChange={handleChange} className="w-full border rounded-md p-2" />
            <input name="bairro" placeholder="Bairro" value={form.bairro} onChange={handleChange} className="w-full border rounded-md p-2" />
            <input name="cidade" placeholder="Cidade" value={form.cidade} onChange={handleChange} className="w-full border rounded-md p-2" />
            <input name="cep" placeholder="CEP" value={form.cep} onChange={handleChange} className="w-full border rounded-md p-2" />
            <input name="complemento" placeholder="Complemento" value={form.complemento} onChange={handleChange} className="w-full border rounded-md p-2" />
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-start">
          <input id="aceitarEmails" name="aceitarEmails" type="checkbox" checked={form.aceitarEmails} onChange={handleChange} className="mt-1 mr-2" />
          <label htmlFor="aceitarEmails" className="text-sm text-gray-600">
            Quero receber por email ofertas e novidades das lojas da Digital Store.
          </label>
        </div>

        {/* Botão */}
        <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-md transition">
          Criar Conta
        </button>
      </form>
    </div>
  );
};

export default Informacoes;
