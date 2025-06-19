import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Importe a imagem do produto
import producImage5Preview from '../../assets/images/produtos/produc-image-5-removebg-preview.png';

function FinalizarCompra() {
    // Dados mockados para o resumo (você pode querer passar isso via props ou context)
    const mockProduct = {
        name: "Tênis Nike Revolution 6 Next Nature Masculino",
        imageUrl: producImage5Preview,
    };
    const subtotal = 219.00;
    const frete = 0.00; // Ou um valor calculado
    const desconto = 30.00; // Ou um valor calculado
    const total = subtotal + frete - desconto;

    // Estado para controlar a forma de pagamento (ex: 'credito' ou 'boleto')
    const [paymentMethod, setPaymentMethod] = useState('credito');

    // **NOVO ESTADO E EFEITO PARA DETECTAR TAMANHO DA TELA**
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768); 

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="bg-page-background py-8 font-inter relative">
            <div className="container mx-auto px-4 pb-10 md:pb-0">

                {/* Título principal da página, mantido como h1 para semântica */}
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Finalizar Compra</h1>

                <div className="lg:flex lg:gap-6">
                    {/* Alterado space-y-6 para space-y-4 para aproximar as divs */}
                    <div className="lg:w-2/3 space-y-4 mb-8 lg:mb-0">
                        {/* Seção de Informações Pessoais */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <label className="block text-sm text-gray-700 mb-4 pb-4 border-b font-medium">Informações Pessoais</label>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="nomeCompleto" className="block text-sm font-medium text-gray-700">Nome Completo *</label>
                                    <input
                                        type="text"
                                        id="nomeCompleto"
                                        placeholder="Insira seu nome"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-600 focus:ring-pink-600 sm:text-sm bg-gray-50"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">CPF *</label>
                                    <input
                                        type="text"
                                        id="cpf"
                                        placeholder="Insira seu CPF"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-600 focus:ring-pink-600 sm:text-sm bg-gray-50"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Insira seu email"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-600 focus:ring-pink-600 sm:text-sm bg-gray-50"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="celular" className="block text-sm font-medium text-gray-700">Celular *</label>
                                    <input
                                        type="text"
                                        id="celular"
                                        placeholder="Insira seu celular"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-600 focus:ring-pink-600 sm:text-sm bg-gray-50"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Seção de Informações de Entrega */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <label className="block text-sm text-gray-700 mb-4 pb-4 border-b font-medium">Informações de Entrega</label>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="endereco" className="block text-sm font-medium text-gray-700">Endereço *</label>
                                    <input
                                        type="text"
                                        id="endereco"
                                        placeholder="Insira seu endereço"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-600 focus:ring-pink-600 sm:text-sm bg-gray-50"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="bairro" className="block text-sm font-medium text-gray-700">Bairro *</label>
                                    <input
                                        type="text"
                                        id="bairro"
                                        placeholder="Insira seu bairro"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-600 focus:ring-pink-600 sm:text-sm bg-gray-50"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="cidade" className="block text-sm font-medium text-gray-700">Cidade *</label>
                                    <input
                                        type="text"
                                        id="cidade"
                                        placeholder="Insira sua Cidade"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-600 focus:ring-pink-600 sm:text-sm bg-gray-50"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="cep" className="block text-sm font-medium text-gray-700">CEP *</label>
                                    <input
                                        type="text"
                                        id="cep"
                                        placeholder="Insira seu CEP"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-600 focus:ring-pink-600 sm:text-sm bg-gray-50"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="complemento" className="block text-sm font-medium text-gray-700">Complemento</label>
                                    <input
                                        type="text"
                                        id="complemento"
                                        placeholder="Insira complemento"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-600 focus:ring-pink-600 sm:text-sm bg-gray-50"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Seção de Informações de Pagamento */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <label className="block text-sm text-gray-700 mb-4 pb-4 border-b font-medium">Informações de Pagamento</label>
                            <div className="mb-4">
                                <span className="block text-sm font-medium text-gray-700 mb-2">Forma de Pagamento</span>
                                <div className="flex items-center space-x-4">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="credito"
                                            checked={paymentMethod === 'credito'}
                                            onChange={() => setPaymentMethod('credito')}
                                            className="form-radio text-pink-600 focus:ring-pink-600"
                                        />
                                        <span className="ml-2 text-gray-800">Cartão de Crédito</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="boleto"
                                            checked={paymentMethod === 'boleto'}
                                            onChange={() => setPaymentMethod('boleto')}
                                            className="form-radio text-pink-600 focus:ring-pink-600"
                                        />
                                        <span className="ml-2 text-gray-800">Boleto Bancário</span>
                                    </label>
                                </div>
                            </div>

                            {paymentMethod === 'credito' && (
                                <div className="space-y-4">
                                    {/* Nome do Cartão: Linha completa */}
                                    <div>
                                        <label htmlFor="nomeCartao" className="block text-sm font-medium text-gray-700">Nome do Cartão *</label>
                                        <input
                                            type="text"
                                            id="nomeCartao"
                                            placeholder="Insira o nome do Cartão"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-600 focus:ring-pink-600 sm:text-sm bg-gray-50"
                                        />
                                    </div>
                                    {/* Número do Cartão e Validade: Na mesma linha, cada um ocupando metade */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="numeroCartao" className="block text-sm font-medium text-gray-700">Número do Cartão *</label>
                                            <input
                                                type="text"
                                                id="numeroCartao"
                                                placeholder="Insira o Número do Cartão"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-600 focus:ring-pink-600 sm:text-sm bg-gray-50"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="validadeCartao" className="block text-sm font-medium text-gray-700">Data de Validade do Cartão *</label>
                                            <input
                                                type="text"
                                                id="validadeCartao"
                                                placeholder="MM/AA"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-600 focus:ring-pink-600 sm:text-sm bg-gray-50"
                                            />
                                        </div>
                                    </div>
                                    {/* CVV: Na linha de baixo, ocupando a mesma largura da primeira coluna do grid acima */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> {/* Novo grid para o CVV */}
                                        <div> {/* CVV na primeira coluna */}
                                            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV *</label>
                                            <input
                                                type="text"
                                                id="cvv"
                                                placeholder="CVV"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-600 focus:ring-pink-600 sm:text-sm bg-gray-50"
                                            />
                                        </div>
                                        <div className="hidden sm:block"></div>
                                    </div>
                                </div>
                            )}
                            {paymentMethod === 'boleto' && (
                                <div className="p-4 bg-blue-50 border border-blue-200 rounded-md text-blue-800 text-sm">
                                    Ao selecionar Boleto Bancário, o boleto será gerado após a confirmação da compra.
                                </div>
                            )}
                        </div>

                        {/* NOVA SEÇÃO: Total Final (replicando o estilo da imagem) - AGORA SÓ SERÁ RENDERIZADA SE FOR DESKTOP */}
                        {isDesktop && ( // <--- AQUI ESTÁ A MAIOR MUDANÇA
                            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
                                <label className=" text-sm text-gray-700 mb-4 pb-2 block font-medium">Finalizar Compra</label>
                                <hr className="mb-4 border-gray-200" />
                                <div className="flex justify-between text-lg font-bold text-black mb-2">
                                    <span>Total</span>
                                    <span className="text-red-600">R$ {total.toFixed(2).replace('.', ',')}</span>
                                </div>
                                <p className="text-sm text-gray-500 text-right mb-4">ou 10x de <span className="font-bold text-black">R$ {(total / 10).toFixed(2).replace('.', ',')}</span> sem juros</p>
                                <button className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-200 text-lg shadow-md">
                                    Realizar Pagamento
                                </button>
                            </div>
                        )}

                    </div>

                    {/* Coluna da Direita: Resumo do Pedido */}
                    <div className="lg:w-1/3 mt-8 lg:mt-0">
                        <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                            <p className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b">RESUMO</p>

                            {/* Item do produto no resumo */}
                            <div className="flex items-center mb-4 pb-4 border-b">
                                <img src={mockProduct.imageUrl} alt={mockProduct.name} className="w-16 h-16 object-contain mr-4 rounded-md bg-purple-100 p-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900 text-base">{mockProduct.name}</h3>
                                </div>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-gray-700">
                                    <span>Subtotal:</span>
                                    <span className="font-semibold">R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                                </div>
                                <div className="flex justify-between text-gray-700">
                                    <span>Frete:</span>
                                    <span className="font-semibold">R$ {frete.toFixed(2).replace('.', ',')}</span>
                                </div>
                                <div className="flex justify-between text-gray-700">
                                    <span>Desconto:</span>
                                    <span className="font-semibold text-red-600">- R$ {desconto.toFixed(2).replace('.', ',')}</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold text-black pt-2 border-t mt-3">
                                    <span>Total</span>
                                    <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                                </div>
                                <p className="text-sm text-gray-500 text-right mt-1">ou 10x de R$ {(total / 10).toFixed(2).replace('.', ',')} sem juros</p>
                            </div>
                            <button className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-200 text-lg shadow-md hidden md:block">
                                Realizar Pagamento
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Total Final e Botão "Realizar Pagamento" - SOMENTE MOBILE*/}
            <div className="p-4 bg-white shadow-lg md:hidden z-40 border-t border-gray-200">
                <div className="flex justify-between text-lg font-bold text-black mb-2">
                    <span>Total</span>
                    <span className="text-red-600">R$ {total.toFixed(2).replace('.', ',')}</span>
                </div>
                <p className="text-sm text-gray-500 text-right mb-4">ou 10x de <span className="font-bold text-black">R$ {(total / 10).toFixed(2).replace('.', ',')}</span> sem juros</p>
                <button className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-200 text-lg shadow-md">
                    Realizar Pagamento
                </button>
            </div>
        </div>
    );
}

export default FinalizarCompra;