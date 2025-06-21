import React from 'react';

function CompraFeita() {
    return (
        <div className="p-4 flex justify-center py-10">
            <div className="flex flex-col justify-center py-10">
                <div className="bg-white shadow-md rounded-lg max-w-md w-full p-6">
                    <div className="text-center">
                        <div className="text-4xl mb-2">🎉</div>
                        <h1 className="text-2xl font-bold text-green-600 mb-4">Compra realizada com sucesso!</h1>
                        <p className="text-gray-700 text-lg">
                            Obrigado pela sua compra. Você receberá uma confirmação por e-mail em breve.
                        </p>
                    </div>

                    <hr className="my-4" />

                    {/* Informações Pessoais */}
                    <div className="mb-4">
                        <h3 className="font-semibold">Informações Pessoais</h3>
                        <p><strong>Nome:</strong>aaaaaaaaaaaaaa</p>
                        <p><strong>CPF:</strong>aaaaaaaaaaa</p>
                        <p><strong>Email:</strong>aaaaaaaaaaaaa</p>
                        <p><strong>Celular:</strong>aaaaaaaaaaaaaaaaa</p>
                    </div>

                    <hr className="my-4" />

                    {/* Informações de Entrega */}
                    <div className="mb-4">
                        <h3 className="font-semibold">aaaaaaaaaaaaaaaaa</h3>
                        <p><strong>Endereço:</strong>aaaaaaaaaaaaaaaaaaa</p>
                        <p><strong>Bairro:</strong>aaaaaaaaaaaaaa</p>
                        <p><strong>Cidade:</strong>aaaaaaaaaaaaaaaaaa</p>
                        <p><strong>CEP:</strong>aaaaaaaaaaaaaaaaaaa</p>
                    </div>

                    <hr className="my-4" />

                    {/* Informações de Pagamento */}
                    <div className="mb-4">
                        <h3 className="font-semibold">aaaaaaaaaaaaaaaaaaa</h3>
                        <p><strong>Titular do Cartão:</strong>aaaaaaaaaaaaaaaaaa</p>
                        <p><strong>Final do Cartão:</strong>aaaaaaaaaaaaaaaaaaa</p>
                    </div>

                    <hr className="my-4" />

                    {/* Resumo da Compra */}
                    <div className="mb-4">
                        <h3 className="font-semibold">aaaaaaaaaaaaaaaaaaaa</h3>
                        <div className="flex items-center gap-4">
                            <img className="w-16 h-16 rounded object-cover border bg-violet-200" src="src/assets/images/produtos/produc-image-5-removebg-preview.png" alt="" />
                            <p>aaaaaaaaaaaaaaaaaaaaaaa</p>
                        </div>
                    </div>

                    {/* Total */}
                    <div className="text-right font-bold text-lg mb-4">
                        Total: R$ 219,00
                        <p className="text-sm text-gray-500">ou 10x de R$ 21,90 sem juros</p>
                    </div>

                    {/* Botões */}
                    <div className="flex justify-between">
                        <button className="text-blue-600 underline">Imprimir Recibo</button>

                    </div>
                </div>
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

export default CompraFeita; // <-- ESSA LINHA É OBRIGATÓRIA!
