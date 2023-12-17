import ProductCard from "./ProductCard/ProductCard";
import useProduct from "./useProduct";
import { Product } from "./types";
import ProductImage from "./ProductCard/ProductImage";
import ProductInfo from "./ProductCard/ProductInfo";
import ProductButton from "./ProductCard/ProductButton";
import ProductTitle from "./ProductCard/ProductTitle";
import ProductCategory from "./ProductCard/ProductCategory";
import ProductRating from "./ProductCard/ProductRating";
import ProductPrice from "./ProductCard/ProductPrice";
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
      image={<ProductImage image={product.image} />}
      info={
        <ProductInfo>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductCategory>{product.category}</ProductCategory>
          <ProductRating stars={product.rating.stars} />
          <ProductPrice amount={product.price} currency="EUR" />
        </ProductInfo>
      }
      action={<ProductButton onClick={addToCart}>Add to Cart</ProductButton>}
    />
  );
}

export default App;
