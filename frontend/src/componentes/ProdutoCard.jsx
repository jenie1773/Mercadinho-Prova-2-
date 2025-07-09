export function ProductCard({ product }) {

  console.log('a',product)
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
      <img src={product.imagem} alt={product.nome} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.nome}</h2>
        <p className="text-sm text-gray-500 mt-1">{product.descricao}</p>
        <p className="text-indigo-600 font-bold mt-2">R$ {product.preco?.toFixed(2)}</p>
      </div>
    </div>
  );
}
