import ProductButton from "./ProductButton";
import ProductImage, { ProductImageProps } from "./ProductImage";
import ProductInfo, { ProductInfoProps } from "./ProductInfo";

type Props = Partial<ProductImageProps> &
  ProductInfoProps & {
    onAddToCart: () => void;
  };

function ProductCard({
  image,
  title,
  category,
  stars,
  price,
  onAddToCart,
}: Props) {
  return (
    <div className="product-card">
      {image && <ProductImage image={image} />}
      <ProductInfo
        title={title}
        category={category}
        stars={stars}
        price={price}
      />
      {onAddToCart && (
        <ProductButton onClick={onAddToCart}>Add to Cart</ProductButton>
      )}
    </div>
  );
}

export default ProductCard;
