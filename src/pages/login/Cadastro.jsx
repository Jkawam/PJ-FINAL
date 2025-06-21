import { useState } from 'react';
import { Link } from 'react-router-dom';

function Cadastro() {
  const [form, setForm] = useState({ email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", form);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-200 to-slate-50 flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 max-w-6xl w-full p-4">

        <div className="hidden md:flex w-full md:w-1/2 justify-center">
          <img
            src="src/assets/images/produtos/cadastroimg-removebg-preview.png"
            alt="Cadastro"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
          />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 w-full max-w-md">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center md:text-left text-gray-800">
            Crie sua conta
          </h2>

          <p className="text-sm text-gray-600 text-center sm:text-left mb-4">
            Já possui uma conta?{" "}
            <a href="/entrar" className="text-pink-600 hover:underline">Entre aqui</a>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Digite seu email"
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 bg-gray-50 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition font-semibold"
            >
              <Link to={`/Informacoes`}>
                <span>Criar conta</span>
              </Link>
            </button>
          </form>

          {/* Texto e ícones */}
          <div className="flex flex-col items-center space-y-2 mt-4 text-gray-700 md:flex-row md:space-x-2 md:space-y-0 md:justify-center">
            <span>Ou fazer login com</span>
            <div className="flex space-x-2">
              <img src="src/layouts/imagens/gmail.png" alt="Gmail" className="w-6 h-6" />
              <img src="src/layouts/imagens/facebook.png" alt="Facebook" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
