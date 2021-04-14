interface Product {
  id: string;
  productName: string;
  productDescription: string;
  productAvailabilityStatus: string;
  productPrice: number;
  productDiscount?: number;
}

export default Product;
