interface Product {
  id: string;
  name: string;
  description: string;
  status: string;
  price: number;
  thumbnail?: string;
  discount?: number;
}

export default Product;
