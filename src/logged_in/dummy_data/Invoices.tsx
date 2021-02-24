import Invoice from "../../shared/interfaces/Invoice";

export const invoices: Invoice[] = [
  {
    id: "invoice1",
    customerName: "NAMPOWER",
    status: "Paid",
    dueDate: new Date(2022, 0, 1).toDateString(),
    issueDate: new Date().toDateString(),
    invoiceNumber: "21dfaww",
  },
  {
    id: "invoice2",
    customerName: "City of Windhoek",
    status: "Unpaid",
    dueDate: new Date(2022, 0, 1).toDateString(),
    issueDate: "Mon Feb 22 2021",
    invoiceNumber: "21dfaww",
  },
  {
    id: "invoice3",
    customerName: "NORED Electricity",
    status: "Sent",
    dueDate: new Date(2022, 0, 1).toDateString(),
    issueDate: new Date().toDateString(),
    invoiceNumber: "21dfaww",
  },
  {
    id: "invoice4",
    customerName: "NCAA",
    status: "Paid",
    dueDate: new Date(2022, 0, 1).toDateString(),
    issueDate: new Date().toDateString(),
    invoiceNumber: "21dfaww",
  },
];
