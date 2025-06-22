import React from 'react';

function CompraFeita() {
    return (
        <div className="p-4 flex justify-center py-10">
            <div className="flex flex-col justify-center py-10 w-full max-w-4xl">
                <div className="bg-white shadow-md rounded-lg w-full p-6">
                    <div className="text-center">
                        <div className="text-4xl mb-2">🎉</div>
                        <h1 className="text-2xl font-bold text-black mb-4">Compra realizada com sucesso!</h1>
                        <p className="text-gray-700 text-lg">
                            Obrigado pela sua compra. Você receberá uma confirmação por e-mail em breve.
                        </p>
                    </div>

                    <hr className="my-4" />

                    {/* Informações Pessoais */}
                    <div className="mb-4">
                        <h3 className="font-semibold">Informações Pessoais</h3>
                        <p><strong>Nome:</strong> Francisco Antonio Pereira</p>
                        <p><strong>CPF:</strong> 123485913-35</p>
                        <p><strong>Email:</strong> francisco@gmail.com</p>
                        <p><strong>Celular:</strong> (85) 5555-5555</p>
                    </div>

                    <hr className="my-4" />

                    {/* Informações de Entrega */}
                    <div className="mb-4">
                        <h3 className="font-semibold">Informações de Entrega</h3>
                        <p><strong>Endereço:</strong> Rua João Pessoa, 333</p>
                        <p><strong>Bairro:</strong> Centro</p>
                        <p><strong>Cidade:</strong> Fortaleza, Ceará</p>
                        <p><strong>CEP:</strong> 433-8800

                        </p>
                    </div>

                    <hr className="my-4" />

                    {/* Informações de Pagamento */}
                    <div className="mb-4">
                        <h3 className="font-semibold">Informações de Pagamento</h3>
                        <p><strong>Titular do Cartão:</strong> FRANCISCO A P</p>
                        <p><strong>Final do Cartão:</strong>  ************2020</p>
                    </div>

                    <hr className="my-4" />

                    {/* Resumo da Compra */}
                    <div className="mb-4">
                        <h3 className="font-semibold">Resumo da compra</h3>
                        <div className="flex items-center gap-4">
                            <img
                                className="w-16 h-16 rounded object-cover border bg-violet-200"
                                src="src/assets/images/produtos/produc-image-5-removebg-preview.png"
                                alt=""
                            />
                            <p>Tênis Nike Revolution 6 Next Nature Masculino</p>
                        </div>
                    </div>

                    {/* Total */}
                    <div className="text-right font-bold text-lg mb-4">
                        Total: R$ 219,00
                        <p className="text-sm text-gray-500">ou 10x de R$ 21,90 sem juros</p>
                    </div>

                    {/* Botões */}
                    <div className="flex justify-between">
                        <button className="text-gray-500 underline">Imprimir Recibo</button>
                    </div>
                </div>

                {/* Botão Voltar para Home */}
                <button
                    onClick={() => window.location.href = '/'}
                    className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 mt-4"
                >
                    Voltar para Home
                </button>
            </div>
        </div>
    );
}

export default CompraFeita;
