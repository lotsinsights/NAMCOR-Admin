import { makeAutoObservable } from "mobx";
import Invoice from "../interfaces/Invoice";

class InvoiceStore {
  open: boolean = false;
  content: Invoice = {
    id: "invoice1",
    customerName: "NAMPOWER",
    invoiceNumber: "21dfaww",
    status: "Paid",
    dueDate: new Date(2022, 0, 1).toDateString(),
    issueDate: new Date().toDateString(),
  };

  constructor() {
    makeAutoObservable(this);
  }

  setOpen() {
    this.open = true;
  }
  setClose() {
    this.open = false;
  }

  // Content functions
  setSingleInvoiceContent(content: Invoice) {
    this.content = content;
  }

  get getContent() {
    return this.content;
  }
}

const MobxInvoiceStore = new InvoiceStore();

export default MobxInvoiceStore;
