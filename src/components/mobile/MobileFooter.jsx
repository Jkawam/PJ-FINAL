// src/components/mobile/MobileFooter.jsx
import React from "react";

function MobileFooter() {
  return (
    <footer className="md:hidden bg-neutral-900 text-white px-6 py-8 text-sm">
      {/* Logo - Caminho corrigido e margem ajustada */}
      <img src="/assets/logo-footer.svg" alt="Digital Store Logo" className="h-8 mb-4" />

      {/* Descrição - Margem e cor de texto ajustadas */}
      <p className="mb-8 text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
      </p>

      {/* Ícones Sociais - Tamanho e margem ajustados */}
      <div className="flex gap-4 mb-8 text-2xl">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
      </div>

      {/* Seção de Informação (conforme imagem) - Sem grid de colunas, empilhado */}
      <div className="mb-8"> {/* Adicionada margem inferior para espaçamento */}
        <h3 className="font-semibold text-lg mb-4">Informação</h3> {/* Título maior e com mais margem */}
        <ul className="space-y-3 text-gray-300"> {/* Espaçamento entre itens e cor de texto */}
          <li>Sobre Drip Store</li>
          <li>Segurança</li>
          <li>Wishlist</li>
          <li>Blog</li>
          <li>Trabalhe conosco</li>
          <li>Meus Pedidos</li>
        </ul>
      </div>

      {/* Seção de Categorias (na imagem, também aparece como "Informação") - Sem grid de colunas */}
      <div className="mb-8"> {/* Adicionada margem inferior para espaçamento */}
        <h3 className="font-semibold text-lg mb-4">Informação</h3> {/* Título maior e com mais margem */}
        <ul className="space-y-3 text-gray-300"> {/* Espaçamento entre itens e cor de texto */}
          <li>Camisetas</li>
          <li>Calças</li>
          <li>Bonés</li>
          <li>Headphones</li>
          <li>Tênis</li>
        </ul>
      </div>

      {/* Nova Seção de Contato - Adicionada conforme a imagem */}
      <div className="mb-8"> {/* Adicionada margem inferior para espaçamento */}
        <h3 className="font-semibold text-lg mb-4">Contato</h3> {/* Título maior e com mais margem */}
        <ul className="space-y-3 text-gray-300"> {/* Espaçamento entre itens e cor de texto */}
          <li>Av. do ze, 1510 - em baixo da ponte -</li>
          <li>uruau, beberibe - CE, 60150-161</li>
          <li>(85) 3051-3411</li>
        </ul>
      </div>

      {/* Linha Divisória - Adicionada antes do copyright */}
      <hr className="border-t border-gray-700 mb-6" />

      {/* Copyright - Centralizado e com cor de texto ajustada */}
      <div className="text-xs text-gray-500 text-center">
        © 2025 Digital College
      </div>
    </footer>
  );
}

export default MobileFooter;