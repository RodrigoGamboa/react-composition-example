import { ReactNode } from "react";

type ProductButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

const ProductButton = ({ children, onClick }: ProductButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};

export default ProductButton;
