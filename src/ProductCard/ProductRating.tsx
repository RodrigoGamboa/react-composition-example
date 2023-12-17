export type ProductRatingProps = {
  stars: number;
};

function ProductRating({ stars }: ProductRatingProps) {
  return <div>{stars}/5</div>;
}

export default ProductRating;
