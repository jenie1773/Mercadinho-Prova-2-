// pages/ProductList.jsx
import { ProductCard } from "../components/ProductCard";

const produtos = [
  {
    id: 1,
    name: "Camiseta Básica",
    description: "100% algodão, várias cores disponíveis.",
    price: 49.9,
    image: "https://source.unsplash.com/featured/?tshirt",
  },
  {
    id: 2,
    name: "Tênis Esportivo",
    description: "Confortável e leve, ideal para corridas.",
    price: 199.9,
    image: "https://source.unsplash.com/featured/?shoes",
  },
  {
    id: 3,
    name: "Relógio Digital",
    description: "Estilo e funcionalidade em um só produto.",
    price: 129.9,
    image: "https://source.unsplash.com/featured/?watch",
  },
];

export default function ProductList() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Produtos</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {produtos.map((produto) => (
          <ProductCard key={produto.id} product={produto} />
        ))}
      </div>
    </div>
  );
}
