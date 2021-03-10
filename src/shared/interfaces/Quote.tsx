interface Quote {
  id: string;
  customerName: string;
  quoteNumber: string;
  issueDate: string;
  dueDate: string;
  status: "Approved" | "Pending" | "Rejected" | "Draft";
  description?: string;
  amount?: number;
  attachment?: any[];
}

export default Quote;
