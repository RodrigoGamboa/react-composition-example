import { ReactNode } from "react";

export type ProductCategoryProps = {
  children: ReactNode;
};

function ProductCategory({ children }: ProductCategoryProps) {
  return <div>{children}</div>;
}

export default ProductCategory;
