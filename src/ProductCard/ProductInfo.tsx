import { ReactNode } from "react";

export type ProductInfoProps = {
  children?: ReactNode;
};

function ProductInfo({ children }: ProductInfoProps) {
  return <>{children}</>;
}

export default ProductInfo;
