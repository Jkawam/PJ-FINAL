import React from 'react';

function CompraFeita() {
return (
    <div className="p-8 text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Compra realizada com sucesso!</h1>
        <p className="text-gray-700 text-lg">Obrigado pela sua compra. Você receberá uma confirmação por e-mail em breve.</p>
    </div>
);
}

export default CompraFeita; // <-- ESSA LINHA É OBRIGATÓRIA!
