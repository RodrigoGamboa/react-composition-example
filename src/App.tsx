import ProductCard from "./ProductCard/ProductCard";
import useProduct from "./useProduct";
import { Product } from "./types";
import "./App.css";

const product: Product = {
  id: 1,
  image: "https://iili.io/HCURIHu.jpg",
  title: "Viston Earl Grey Tea",
  category: "Black Tea",
  rating: { stars: 4, reviews: 4 },
  price: 8.95,
};

function App() {
  const { addToCart } = useProduct(product);

  return (
    <ProductCard
      image={product.image}
      title={product.title}
      category={product.category}
      stars={product.rating.stars}
      price={product.price}
      onAddToCart={addToCart}
    />
  );
}

export default App;
