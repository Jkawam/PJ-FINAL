import React from 'react';

function ProductFilter() {
  return (
    <div className="h-full overflow-y-auto px-4">
      {/* Seção de Marca */}
      <div className="mb-6">
        <h3 className="font-semibold text-base text-gray-700 mb-2">Marca</h3>
        <div className="space-y-2">
          {['Adidas', 'Calenciaga', 'K-Swiss', 'Nike', 'Puma'].map((marca) => (
            <label key={marca} className="flex items-center">
              <input type="checkbox" className="form-checkbox text-pink-600 rounded" />
              <span className="ml-2 text-gray-700">{marca}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Seção de Categoria */}
      <div className="mb-6">
        <h3 className="font-semibold text-base text-gray-700 mb-2">Categoria</h3>
        <div className="space-y-2">
          {['Esporte e lazer', 'Casual', 'Utilitário', 'Corrida'].map((cat) => (
            <label key={cat} className="flex items-center">
              <input type="checkbox" className="form-checkbox text-pink-600 rounded" />
              <span className="ml-2 text-gray-700">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Seção de Gênero */}
      <div className="mb-6">
        <h3 className="font-semibold text-base text-gray-700 mb-2">Gênero</h3>
        <div className="space-y-2">
          {['Masculino', 'Feminino', 'Unisex'].map((gen) => (
            <label key={gen} className="flex items-center">
              <input type="checkbox" className="form-checkbox text-pink-600 rounded" />
              <span className="ml-2 text-gray-700">{gen}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Seção de Estado */}
      <div>
        <h3 className="font-semibold text-base text-gray-700 mb-2">Estado</h3>
        <div className="space-y-2">
          {['Novo', 'Usado'].map((estado) => (
            <label key={estado} className="flex items-center">
              <input type="radio" name="condition" className="form-radio text-pink-600" />
              <span className="ml-2 text-gray-700">{estado}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;