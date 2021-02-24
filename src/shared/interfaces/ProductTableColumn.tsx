interface ProductTableColumn {
  id: "name" | "description";
  label: string;
  minWidth?: number;
  align?: "right";
}

export default ProductTableColumn;
