type Rating = {
  stars: number;
  reviews: number;
};

export type Product = {
  id: number;
  image: string;
  title: string;
  category: string;
  rating: Rating;
  price: number;
};
