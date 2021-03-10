interface QuoteRequestTableColumn {
  id: "customerName" | "requestNumber" | "issueDate" | "dueDate" | "status";
  label: string;
  minWidth?: number;
  align?: "right";
}

export default QuoteRequestTableColumn;
