export function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="text-sm text-gray-500 mt-1">{product.description}</p>
        <p className="text-indigo-600 font-bold mt-2">R$ {product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
