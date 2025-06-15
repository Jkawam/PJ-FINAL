// src/components/desktop/DesktopFooter.jsx
import React from "react";

function DesktopFooter() {
return (
    <footer className="hidden md:block bg-neutral-900 text-white px-12 py-10">
    <div className=" mx-auto grid grid-cols-4 gap-14 text-sm container px-4 py-3  items-center justify-between md:py-4">
        <div>
            <img src="/public/assets/logo-footer.svg" alt="Digital Store Logo" className="h-8 mb-2" />
            <p className="mb-4 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        <div className="flex gap-4">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
        </div>
        </div>
        <div>
            <h3 className="font-semibold mb-3">Informação</h3>
            <ul className="space-y-2">
            <li>Sobre Drip Store</li>
            <li>Segurança</li>
            <li>Wishlist</li>
            <li>Blog</li>
            <li>Trabalhe conosco</li>
            <li>Meus Pedidos</li>
            </ul>
        </div>
        <div>
            <h3 className="font-semibold mb-3">Categorias</h3>
            <ul className="space-y-2">
            <li>Camisetas</li>
            <li>Calças</li>
            <li>Bonés</li>
            <li>Headphones</li>
            <li>Tênis</li>
            </ul>
        </div>
        <div>
            <h3 className="font-semibold mb-3">Contato</h3>
            <p className="text-sm">
            Av. do zé- no uruau - em baixo da ponte, beberibe - CE, 040<br />
            (85) 3051-3411
            </p>
        </div>
    </div>
    <hr className="my-6 border-gray-700" />
    <p className="text-center text-xs text-gray-500">© 2025 Digital College</p>
    </footer>
);
}

export default DesktopFooter;
