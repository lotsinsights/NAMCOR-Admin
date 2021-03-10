interface Invoice {
  id: string;
  customerName: string;
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  status: "Verified" | "Pending" | "Unverified";
  description?: string;
  amount?: number;
  popFiles?: any[];
}

export default Invoice;
