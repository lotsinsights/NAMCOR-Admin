interface OrderTableColumn {
  id: "customerName" | "orderNumber" | "issueDate" | "dueDate" | "status";
  label: string;
  minWidth?: number;
  align?: "right";
}

export default OrderTableColumn;
