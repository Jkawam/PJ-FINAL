import React, { useState, useEffect } from 'react'; // Importe useEffect
import DesktopHeader from './desktop/DesktopHeader';
import MobileHeader from './mobile/MobileHeader';

// Constantes de URL de imagem - Ficam no componente principal
const DIGITAL_STORE_LOGO_URL = "/assets/logo-header.svg"; // Caminho corrigido para assets na public
const USER_PROFILE_IMAGE_URL = "https://via.placeholder.com/40x40/FF5733/FFFFFF?text=P"; // Placeholder, mude para sua URL real

// Defina o breakpoint md do Tailwind CSS (padrão é 768px)
const BREAKPOINT_MD = 768; 

function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  const isDesktop = width >= BREAKPOINT_MD;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    // Limpeza do event listener ao desmontar o componente
    return () => window.removeEventListener('resize', handleResize);
  }, []); // O array vazio garante que o efeito roda apenas uma vez (ao montar)

  return (
    <header className="bg-white shadow-md">
      {isDesktop ? (
        <DesktopHeader 
          digitalStoreLogoUrl={DIGITAL_STORE_LOGO_URL} 
          userProfileImageUrl={USER_PROFILE_IMAGE_URL} 
        />
      ) : (
        <MobileHeader 
          digitalStoreLogoUrl={DIGITAL_STORE_LOGO_URL} 
          userProfileImageUrl={USER_PROFILE_IMAGE_URL}
        />
      )}
    </header>
  );
}

export default Header;