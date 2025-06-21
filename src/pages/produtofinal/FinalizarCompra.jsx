import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Importe a imagem do produto (se necessário para mock data)
import producImage5Preview from '../../assets/images/produtos/produc-image-5-removebg-preview.png';

function FinalizarCompra() {
    // 1. Inicializa o hook useNavigate para navegação programática
    const navigate = useNavigate();

    // Dados mockados para o resumo (em uma aplicação real, viriam de props, contexto ou API)
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

    // Estado e Efeito para detectar o tamanho da tela para renderização responsiva
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        window.addEventListener('resize', handleResize);
        // Função de limpeza para remover o event listener quando o componente for desmontado
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Array de dependências vazio significa que o efeito roda uma vez ao montar e limpa ao desmontar

    // 2. Função para lidar com o envio do pagamento e navegação
    const handlePayment = () => {
        // --- COLOCAR LÓGICA DE PROCESSAMENTO DE PAGAMENTO AQUI ---
        // Ex: Validação de formulário, envio de dados para uma API, etc.
        console.log("Iniciando pagamento...");

        // Após o "sucesso" do pagamento (aqui simulado), navegue para a página de confirmação
        navigate('/compra-feita'); // Rota para a página de compra concluída
    };

    // Componente auxiliar para campos de input para reduzir repetição
    const InputField = ({ id, label, type = "text", placeholder, required = false }) => (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-600 focus:ring-pink-600 sm:text-sm bg-gray-50"
                required={required}
            />
        </div>
    );

    return (
        <div className="bg-page-background py-8 font-inter relative">
            <div className="container mx-auto px-4 pb-10 md:pb-0">

                {/* Título principal da página */}
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Finalizar Compra</h1>

                <div className="lg:flex lg:gap-6">
                    {/* Área de Conteúdo Principal (Formulários) */}
                    <div className="lg:w-2/3 space-y-4 mb-8 lg:mb-0">

                        {/* Seção de Informações Pessoais */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="block text-sm text-gray-700 mb-4 pb-4 border-b font-medium">Informações Pessoais</h2>
                            <div className="space-y-4">
                                <InputField id="nomeCompleto" label="Nome Completo" placeholder="Insira seu nome" required />
                                <InputField id="cpf" label="CPF" placeholder="Insira seu CPF" required />
                                <InputField id="email" label="E-mail" type="email" placeholder="Insira seu email" required />
                                <InputField id="celular" label="Celular" placeholder="Insira seu celular" required />
                            </div>
                        </div>

                        {/* Seção de Informações de Entrega */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="block text-sm text-gray-700 mb-4 pb-4 border-b font-medium">Informações de Entrega</h2>
                            <div className="space-y-4">
                                <InputField id="endereco" label="Endereço" placeholder="Insira seu endereço" required />
                                <InputField id="bairro" label="Bairro" placeholder="Insira seu bairro" required />
                                <InputField id="cidade" label="Cidade" placeholder="Insira sua Cidade" required />
                                <InputField id="cep" label="CEP" placeholder="Insira seu CEP" required />
                                <InputField id="complemento" label="Complemento" placeholder="Insira complemento" />
                            </div>
                        </div>

                        {/* Seção de Informações de Pagamento */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="block text-sm text-gray-700 mb-4 pb-4 border-b font-medium">Informações de Pagamento</h2>
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
                                    <InputField id="nomeCartao" label="Nome do Cartão" placeholder="Insira o nome do Cartão" required />
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <InputField id="numeroCartao" label="Número do Cartão" placeholder="Insira o Número do Cartão" required />
                                        <InputField id="validadeCartao" label="Data de Validade do Cartão" placeholder="MM/AA" required />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <InputField id="cvv" label="CVV" placeholder="CVV" required />
                                        <div className="hidden sm:block"></div> {/* Espaçador para alinhamento no desktop */}
                                    </div>
                                </div>
                            )}

                            {paymentMethod === 'boleto' && (
                                <div className="p-4 bg-blue-50 border border-blue-200 rounded-md text-blue-800 text-sm">
                                    Ao selecionar Boleto Bancário, o boleto será gerado após a confirmação da compra.
                                </div>
                            )}
                        </div>

                        {/* Seção de Total Final e Botão de Pagamento (somente desktop) */}
                        {isDesktop && (
                            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
                                <h2 className="text-sm text-gray-700 mb-4 pb-2 block font-medium">Finalizar Compra</h2>
                                <hr className="mb-4 border-gray-200" />
                                <div className="flex justify-between text-lg font-bold text-black mb-2">
                                    <span>Total</span>
                                    <span className="text-red-600">R$ {total.toFixed(2).replace('.', ',')}</span>
                                </div>
                                <p className="text-sm text-gray-500 text-right mb-4">
                                    ou 10x de <span className="font-bold text-black">R$ {(total / 10).toFixed(2).replace('.', ',')}</span> sem juros
                                </p>
                                <button
                                    onClick={handlePayment} /* Chama a função de pagamento */
                                    className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-200 text-lg shadow-md">
                                    Realizar Pagamento
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Coluna da Direita: Resumo do Pedido */}
                    <div className="lg:w-1/3 mt-8 lg:mt-0">
                        <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b">RESUMO</h2>

                            {/* Item do produto no resumo */}
                            <div className="flex items-center mb-4 pb-4 border-b">
                                <img src={mockProduct.imageUrl} alt={mockProduct.name} className="w-16 h-16 object-contain mr-4 rounded-md bg-purple-100 p-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900 text-base">{mockProduct.name}</h3>
                                </div>
                            </div>

                            {/* Detalhes de preço no resumo */}
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
                                <p className="text-sm text-gray-500 text-right mt-1">
                                    ou 10x de R$ {(total / 10).toFixed(2).replace('.', ',')} sem juros
                                </p>
                            </div>
                            {/* Botão de Pagamento (oculto no mobile, visível no rodapé fixo) */}
                            <button
                                onClick={handlePayment} /* Chama a função de pagamento */
                                className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-200 text-lg shadow-md hidden md:block">
                                Realizar Pagamento
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rodapé Fixo para Mobile: Total e Botão de Pagamento */}
            {!isDesktop && (
                <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg z-40 border-t border-gray-200">
                    <div className="flex justify-between text-lg font-bold text-black mb-2">
                        <span>Total</span>
                        <span className="text-red-600">R$ {total.toFixed(2).replace('.', ',')}</span>
                    </div>
                    <p className="text-sm text-gray-500 text-right mb-4">
                        ou 10x de <span className="font-bold text-black">R$ {(total / 10).toFixed(2).replace('.', ',')}</span> sem juros
                    </p>
                    <button
                        onClick={handlePayment} /* Chama a função de pagamento */
                        className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-200 text-lg shadow-md">
                        Realizar Pagamento
                    </button>
                </div>
            )}
        </div>
    );
}

export default FinalizarCompra;