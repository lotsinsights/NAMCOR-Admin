interface ProductTableColumn {
  id: "productName" | "productDescription" | "productAvailabilityStatus";
  label: string;
  minWidth?: number;
  align?: "right";
}

export default ProductTableColumn;
