export type ProductInfoProps = {
  title: string;
  category: string;
  stars: number;
  price: number;
};

function ProductInfo({ title, category, stars, price }: ProductInfoProps) {
  return (
    <>
      <div>{title}</div>
      <div>{category}</div>
      <div>{stars}</div>
      <div>{price}</div>
    </>
  );
}

export default ProductInfo;
