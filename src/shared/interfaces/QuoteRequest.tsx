interface QuoteRequest {
  id: string;
  customerName: string;
  requestNumber: string;
  issueDate: string;
  dueDate: string;
  status: "Approved" | "Pending" | "Rejected";
  description?: string;
  amount?: number;
  quotations?: any[];
  attachments?: any[];
  requestedProducts?: any[];
}

export default QuoteRequest;
