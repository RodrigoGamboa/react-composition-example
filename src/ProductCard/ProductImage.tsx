export type ProductImageProps = {
  image: string;
};

function ProductImage({ image }: ProductImageProps) {
  return <img src={image} width="100%" />;
}

export default ProductImage;
