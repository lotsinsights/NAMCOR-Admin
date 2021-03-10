interface Order {
  id: string;
  customerName: string;
  orderNumber: string;
  issueDate: string;
  dueDate: string;
  status: "Purchase" | "Cancelled" | "Sales";
  description?: string;
  amount?: number;
  attachment?: any[];
}

export default Order;
