interface InvoiceTableColumn {
  id: "customerName" | "invoiceNumber" | "issueDate" | "dueDate" | "status";
  label: string;
  minWidth?: number;
  align?: "right";
}

export default InvoiceTableColumn;
