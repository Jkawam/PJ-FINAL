import Nav from "../../functions/nav";

const MinhasInformacoes = () => {
    return ( 
        <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
            <div className="px-4 py-8 md:grid md:grid-cols-[250px_1fr] gap-6">
                <Nav />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-3xl mx-auto ">
                <div className="flex items-center justify-between border-b pb-4 mb-6">
                    <h3 className="text-xl font-bold mb-6 ">Minhas Informações</h3>
                    <a href="#" className="text-pink-500 hover:underline">Editar</a>
                </div> 
                <div className="pb-4">
                    <h3 className="text-lg font-semibold mb-4">Dados Pessoais</h3>
                <p className="text-gray-600">Nome: João da Silva</p>
                <p className="text-gray-600">CPF: 123.456.789-00</p>
                <p className="text-gray-600">Email: joao.silva@example.com</p>
                <p className="text-gray-600 border-b pb-4">Telefone: (11) 98765-4321</p>
                </div>
                <div className="pb-4">
                    <h3 className="text-lg font-semibold mb-4">Informações de Entrega</h3>
                    <p className="text-gray-600">Rua: Av. Paulista</p>
                    <p className="text-gray-600">Número: 1578</p>
                    <p className="text-gray-600">Bairro: Bela Vista</p>
                    <p className="text-gray-600 ">Cidade: São Paulo</p>
                </div>
            </div>
        </div>
     );
}
 
export default MinhasInformacoes;