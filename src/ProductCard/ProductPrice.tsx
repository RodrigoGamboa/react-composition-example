export type ProductPriceProps = {
  currency: "USD" | "EUR";
  amount: number;
};

function ProductPrice({ currency, amount }: ProductPriceProps) {
  return (
    <div>
      {amount} {currency}
    </div>
  );
}

export default ProductPrice;
