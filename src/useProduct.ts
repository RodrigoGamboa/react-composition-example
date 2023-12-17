import { Product } from "./types";

const useProduct = (product: Product) => {
  const addToCart = () => {
    console.log("Added", product);
  };
  return { addToCart };
};

export default useProduct;
