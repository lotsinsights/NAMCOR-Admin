interface ProductTableColumn {
  id: "name" | "description" | "status";
  label: string;
  minWidth?: number;
  align?: "right";
}

export default ProductTableColumn;
