const Cards = ({ imagem, off, produto, nome, preco, desconto }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <div className="relative mb-3">
        <img src={imagem} alt={produto} className="w-full rounded-xl" />
        {off && (
        <span className="absolute top-2 left-2 bg-green-200 text-green-900 text-xs font-bold px-2 py-1 rounded-xl shadow">{off}</span>
        )}
      </div>

      <p className="text-xs text-gray-500 mb-1">{produto}</p>
      <h3 className="text-sm font-medium text-gray-800 mb-1">{nome}</h3>

      <div className="flex  gap-1">
        <span className="text-sm text-gray-400 line-through">{preco}</span>
        <span className="text-sm font-bold text-gray-800">{desconto}</span>
      </div>
    </div>
  );
};

export default Cards;
