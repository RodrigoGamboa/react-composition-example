import { ReactNode } from "react";

type Props = {
  image?: ReactNode;
  info?: ReactNode;
  action?: ReactNode;
};

function ProductCard({ image, info, action }: Props) {
  return (
    <div className="product-card">
      {image}
      {info}
      {action}
    </div>
  );
}

export default ProductCard;
