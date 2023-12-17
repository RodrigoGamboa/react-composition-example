import { ReactNode } from "react";

export type ProductTitleProps = {
  children: ReactNode;
};

function ProductTitle({ children }: ProductTitleProps) {
  return <div>{children}</div>;
}

export default ProductTitle;
