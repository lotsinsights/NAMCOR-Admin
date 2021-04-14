interface Product {
  id: string;
  productName: string;
  productDescription: string;
  productAvailabilityStatus: string;
  productPrice: number;
  // thumbnail?: string;
  productDiscount?: number;
}

export default Product;
