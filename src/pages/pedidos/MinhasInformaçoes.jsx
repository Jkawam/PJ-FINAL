import React from 'react';
import Nav from "../../functions/nav"; // Verifique se o caminho para o seu componente Nav está correto

const MinhasInformacoes = () => {
    return (
        // Este é o container principal que define o layout de grid em telas médias (md) ou maiores.
        // Em telas pequenas (mobile), os itens vão empilhar verticalmente.
        <div className="container mx-auto px-4 py-8 md:grid md:grid-cols-[250px_1fr] gap-6">
            
            {/* Coluna 1: O menu de navegação lateral */}
            <Nav />

            {/* Coluna 2: A caixa de conteúdo principal */}
            <div className="bg-white rounded-lg shadow-md p-6 h-fit"> {/* Adicionado h-fit para a altura se ajustar ao conteúdo */}
                <div className="flex items-center justify-between border-b pb-4 mb-6">
                    <h3 className="text-xl font-bold">Minhas Informações</h3>
                    <a href="#" className="text-pink-500 hover:underline">Editar</a>
                </div>

                <div className="border-b pb-4 mb-6">
                    <h3 className="text-lg font-semibold mb-4">Dados Pessoais</h3>
                    <div className="space-y-2 text-gray-600">
                        <p><strong>Nome:</strong> João da Silva</p>
                        <p><strong>CPF:</strong> 123.456.789-00</p>
                        <p><strong>Email:</strong> joao.silva@example.com</p>
                        <p><strong>Telefone:</strong> (11) 98765-4321</p>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Informações de Entrega</h3>
                    <div className="space-y-2 text-gray-600">
                        <p><strong>Rua:</strong> Av. Paulista</p>
                        <p><strong>Número:</strong> 1578</p>
                        <p><strong>Bairro:</strong> Bela Vista</p>
                        <p><strong>Cidade:</strong> São Paulo</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MinhasInformacoes;