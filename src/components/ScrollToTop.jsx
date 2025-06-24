import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation(); // Obtém o caminho da URL atual

useEffect(() => {
    // Quando o 'pathname' (caminho da URL) muda, rola para o topo
    window.scrollTo(0, 0); 
  }, [pathname]); // O efeito é executado sempre que 'pathname' muda

  return null; // Este componente não renderiza nada visualmente
}

export default ScrollToTop;