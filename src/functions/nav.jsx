import { Link } from 'react-router-dom';

const Nav = () => {
    return ( 
        <div>
          <aside className="hidden md:block bg-white rounded-lg shadow-md p-4 border-y-1 border-x-0 max-h-min ">
        <nav className="space-y-2 text-sm font-medium text-gray-700 ">
           <Link to={`/Informacoes`}>
              <span className="block px-2 py-1 hover:text-pink-500 hover:border-pink-500-l-2 border-b mb-4 pb-4">Meu Perfil</span>
           </Link>

           <Link to={`/meus-pedidos`}>
              <span className="block px-2 py-1 hover:text-pink-500 hover:border-pink-500-l-2 border-b mb-4 pb-4">Meus Pedidos</span>
           </Link>

           <Link to={`/minhas-informacoes`}>
              <span className="block px-2 py-1 hover:text-pink-500 hover:border-pink-500-l-2 border-b mb-4 pb-4">Minhas Informações</span>
           </Link>

           <Link to={`/Pagamento`}>
              <span className="block px-2 py-1 hover:text-pink-500 hover:border-pink-500-l-2  mb-4 pb-4">Métodos de Pagamento</span>
           </Link>
          
        </nav>
      </aside>  
        </div>
     );
}
 
export default Nav;