interface QuoteTableColumn {
  id: "customerName" | "quoteNumber" | "issueDate" | "dueDate" | "status";
  label: string;
  minWidth?: number;
  align?: "right";
}

export default QuoteTableColumn;
