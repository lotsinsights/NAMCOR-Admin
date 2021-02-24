interface Invoice {
  id: string;
  customerName: string;
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  status: "Paid" | "Unpaid" | "Sent";
  description?: string;
  amount?: number;
  popFiles?: any[];
}

export default Invoice;
