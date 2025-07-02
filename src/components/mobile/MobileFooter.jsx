import React from "react";

// 1. IMAGEM DA LOGO IMPORTADA AQUI
// ATENÇÃO: Verifique se o caminho para a sua imagem está correto!
import logoFooter from '../../assets/images/logo-footer.svg';

function MobileFooter() {
  return (
    <footer className="md:hidden bg-neutral-900 text-white px-6 py-8 text-sm">
      {/* 2. USANDO A VARIÁVEL IMPORTADA NO SRC */}
      <img src={logoFooter} alt="Digital Store Logo" className="h-8 mb-4" />

      <p className="mb-8 text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
      </p>

      {/* Ícones Sociais */}
      <div className="flex justify-start mt-5 space-x-5 mb-8">
        {/* Facebook */}
        <a href="#" className="text-gray-500 hover:text-white dark:hover:text-white dark:text-gray-400" aria-label="Facebook">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path clipRule="evenodd" fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.778-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a href="#" className="text-gray-500 hover:text-white dark:hover:text-white dark:text-gray-400" aria-label="Instagram">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path clipRule="evenodd" fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.354 3.608 1.33.975.975 1.267 2.242 1.33 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.354 2.633-1.33 3.608-.975.975-2.242 1.267-3.608 1.33-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.354-3.608-1.33-.975-.975-1.267-2.242-1.33-3.608C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.85c.062-1.366.354-2.633 1.33-3.608.975-.975 2.242-1.267 3.608-1.33C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.737 0 8.332.015 7.052.073 5.773.13 4.546.384 3.455 1.474 2.364 2.565 2.11 3.791 2.054 5.07 1.996 6.35 1.981 6.754 1.981 10.017c0 3.263.015 3.667.073 4.947.056 1.28.31 2.506 1.401 3.597 1.09 1.091 2.317 1.344 3.597 1.401 1.28.058 1.684.073 4.947.073 3.263 0 3.667-.015 4.947-.073 1.28-.056 2.506-.31 3.597-1.401 1.091-1.09 1.344-2.317 1.401-3.597.058-1.28.073-1.684.073-4.947 0-3.263-.015-3.667-.073-4.947-.056-1.28-.31-2.506-1.401-3.597C19.453.384 18.227.13 16.947.073 15.667.015 15.263 0 12 0z"/>
            <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z"/>
            <circle cx="18.406" cy="5.594" r="1.44"/>
          </svg>
        </a>

        {/* Twitter */}
        <a href="#" className="text-gray-500 hover:text-white dark:hover:text-white dark:text-gray-400" aria-label="Twitter">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775a4.958 4.958 0 0 0 2.163-2.724 9.862 9.862 0 0 1-3.127 1.195 4.925 4.925 0 0 0-8.39 4.49A13.978 13.978 0 0 1 1.671 3.149a4.822 4.822 0 0 0-.666 2.475c0 1.708.869 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.928 4.928 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.224.084 4.93 4.93 0 0 0 4.604 3.417A9.867 9.867 0 0 1 0 19.54a13.936 13.936 0 0 0 7.548 2.209c9.142 0 14.307-7.721 13.995-14.646a9.936 9.936 0 0 0 2.411-2.534z"/>
          </svg>
        </a>
      </div>

      {/* Informação */}
      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">Informação</h3>
        <ul className="space-y-3 text-gray-300">
          <li>Sobre Drip Store</li>
          <li>Segurança</li>
          <li>Wishlist</li>
          <li>Blog</li>
          <li>Trabalhe conosco</li>
          <li>Meus Pedidos</li>
        </ul>
      </div>

      {/* Categorias */}
      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">Categorias</h3>
        <ul className="space-y-3 text-gray-300">
          <li>Camisetas</li>
          <li>Calças</li>
          <li>Bonés</li>
          <li>Headphones</li>
          <li>Tênis</li>
        </ul>
      </div>

      {/* Contato */}
      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">Contato</h3>
        <ul className="space-y-3 text-gray-300">
          <li>Av. do Zé, 1510 - em baixo da ponte</li>
          <li>Uruaú, Beberibe - CE, 60150-161</li>
          <li>(85) 3051-3411</li>
        </ul>
      </div>

      <hr className="border-t border-gray-700 mb-6" />

      <div className="text-xs text-gray-500 text-center">
        © 2025 Digital College
      </div>
    </footer>
  );
}

export default MobileFooter;
