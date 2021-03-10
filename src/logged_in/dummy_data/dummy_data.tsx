import Company from "../../shared/interfaces/Company";
import Invoice from "../../shared/interfaces/Invoice";
import Order from "../../shared/interfaces/Order";
import Product from "../../shared/interfaces/Product";
import Quote from "../../shared/interfaces/Quote";
import QuoteRequest from "../../shared/interfaces/QuoteRequest";
import { SearchDataInterface } from "../../shared/interfaces/SearchDataInterface";

// Products
export const products: Product[] = [
  {
    id: "Product1",
    name: "Petrol",
    status: "Available",
    description:
      " It is derived during fractional distillation process and has a translucent liquid form. It's not used in its crude form. Different additives are added like ethanol to use it as fuel for passenger vehicles.",
    price: 12,
    discount: 0,
  },
  {
    id: "Product2",
    name: "Diesel",
    status: "Out of stock",
    description:
      "Diesel fuel is a mixture of hydrocarbons obtained by distillation of crude oil. The important properties which are used to characterize diesel fuel include cetane number (or cetane index), fuel volatility, density, viscosity, cold behavior, and sulfur content. Diesel fuel is a mixture of hydrocarbons obtained by distillation of crude oil. The important properties which are used to characterize diesel fuel include cetane number (or cetane index), fuel volatility, density, viscosity, cold behavior, and sulfur content.",
    price: 12,
    thumbnail:
      "https://images.pexels.com/photos/9796/car-refill-transportation-transport.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    discount: 10,
  },
  {
    id: "Product3",
    name: "Gasoline",
    status: "Available",
    description:
      " It is derived during fractional distillation process and has a translucent liquid form. It's not used in its crude form. Different additives are added like ethanol to use it as fuel for passenger vehicles.",
    price: 12,
    thumbnail:
      "https://images.pexels.com/photos/9796/car-refill-transportation-transport.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    discount: 15,
  },
  {
    id: "Product4",
    name: "Paraffin",
    status: "Available",
    description:
      "Diesel fuel is a mixture of hydrocarbons obtained by distillation of crude oil. The important properties which are used to characterize diesel fuel include cetane number (or cetane index), fuel volatility, density, viscosity, cold behavior, and sulfur content. Diesel fuel is a mixture of hydrocarbons obtained by distillation of crude oil. The important properties which are used to characterize diesel fuel include cetane number (or cetane index), fuel volatility, density, viscosity, cold behavior, and sulfur content.",
    price: 12,
    thumbnail:
      "https://images.pexels.com/photos/9796/car-refill-transportation-transport.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    discount: 0,
  },
];

// Quote Requests data
export const quote_request: QuoteRequest[] = [
  {
    id: "request1",
    customerName: "NAMPOWER",
    status: "Rejected",
    dueDate: new Date(2022, 0, 1).toDateString(),
    issueDate: new Date().toDateString(),
    requestNumber: "21dfaww",
  },
  {
    id: "request2",
    customerName: "City of Windhoek",
    status: "Approved",
    dueDate: new Date(2022, 0, 1).toDateString(),
    issueDate: "Mon Feb 22 2021",
    requestNumber: "21dfaww",
  },
  {
    id: "invoice3",
    customerName: "NORED Electricity",
    status: "Pending",
    dueDate: new Date(2022, 0, 1).toDateString(),
    issueDate: new Date().toDateString(),
    requestNumber: "21dfaww",
  },
  {
    id: "invoice4",
    customerName: "NCAA",
    status: "Rejected",
    dueDate: new Date(2022, 0, 1).toDateString(),
    issueDate: new Date().toDateString(),
    requestNumber: "21dfaww",
  },
  {
    id: "invoice5",
    customerName: "NCAA",
    status: "Approved",
    dueDate: new Date(2022, 0, 1).toDateString(),
    issueDate: new Date().toDateString(),
    requestNumber: "21dfaww",
  },
];

// Invoice data
export const invoices: Invoice[] = [
  {
    id: "invoice1",
    customerName: "NAMPOWER",
    status: "Verified",
    dueDate: new Date(2022, 0, 1).toDateString(),
    issueDate: new Date().toDateString(),
    invoiceNumber: "21dfaww",
  },
  {
    id: "invoice2",
    customerName: "City of Windhoek",
    status: "Pending",
    dueDate: new Date(2022, 0, 1).toDateString(),
    issueDate: "Mon Feb 22 2021",
    invoiceNumber: "21dfaww",
  },
  {
    id: "invoice3",
    customerName: "NORED Electricity",
    status: "Unverified",
    dueDate: new Date(2022, 0, 1).toDateString(),
    issueDate: new Date().toDateString(),
    invoiceNumber: "21dfaww",
  },
  {
    id: "invoice4",
    customerName: "NCAA",
    status: "Verified",
    dueDate: new Date(2022, 0, 1).toDateString(),
    issueDate: new Date().toDateString(),
    invoiceNumber: "21dfaww",
  },
  {
    id: "invoice5",
    customerName: "NCAA",
    status: "Unverified",
    dueDate: new Date(2022, 0, 1).toDateString(),
    issueDate: new Date().toDateString(),
    invoiceNumber: "21dfaww",
  },
];

// Quotations data
export const quotes: Quote[] = [
  {
    id: "quotation1",
    customerName: "NAMPOWER",
    status: "Rejected",
    dueDate: new Date(2022, 0, 1).toDateString(),
    issueDate: new Date().toDateString(),
    quoteNumber: "21dfaww",
  },
  {
    id: "quotation2",
    customerName: "City of Windhoek",
    status: "Approved",
    dueDate: new Date(2022, 0, 1).toDateString(),
    issueDate: "Mon Feb 22 2021",
    quoteNumber: "21dfaww",
  },
  {
    id: "quotation3",
    customerName: "NORED Electricity",
    status: "Pending",
    dueDate: new Date(2022, 0, 1).toDateString(),
    issueDate: new Date().toDateString(),
    quoteNumber: "21dfaww",
  },
  {
    id: "quotation4",
    customerName: "NCAA",
    status: "Draft",
    dueDate: new Date(2022, 0, 1).toDateString(),
    issueDate: new Date().toDateString(),
    quoteNumber: "21dfaww",
  },
  {
    id: "quotation5",
    customerName: "NCAA",
    status: "Approved",
    dueDate: new Date(2022, 0, 1).toDateString(),
    issueDate: new Date().toDateString(),
    quoteNumber: "21dfaww",
  },
];

// Orders data
export const orders: Order[] = [
  {
    id: "order1",
    customerName: "NAMPOWER",
    status: "Purchase",
    dueDate: new Date(2022, 0, 1).toDateString(),
    issueDate: new Date().toDateString(),
    orderNumber: "21dfaww",
  },
  {
    id: "order2",
    customerName: "City of Windhoek",
    status: "Sales",
    dueDate: new Date(2022, 0, 1).toDateString(),
    issueDate: "Mon Feb 22 2021",
    orderNumber: "21dfaww",
  },
  {
    id: "order3",
    customerName: "NORED Electricity",
    status: "Cancelled",
    dueDate: new Date(2022, 0, 1).toDateString(),
    issueDate: new Date().toDateString(),
    orderNumber: "21dfaww",
  },
  {
    id: "order4",
    customerName: "NCAA",
    status: "Purchase",
    dueDate: new Date(2022, 0, 1).toDateString(),
    issueDate: new Date().toDateString(),
    orderNumber: "21dfaww",
  },
  {
    id: "order5",
    customerName: "NCAA",
    status: "Purchase",
    dueDate: new Date(2022, 0, 1).toDateString(),
    issueDate: new Date().toDateString(),
    orderNumber: "21dfaww",
  },
];

// Search Data
export const products_list: SearchDataInterface[] = [
  { title: "Petrol Fuel", price: 9 },
  { title: "Gasoline", price: 72 },
  { title: "Butane", price: 24 },
  { title: "Diesel fuel", price: 20 },
  { title: "Parafin", price: 54 },
  { title: "Natural gas", price: 54 },
  { title: "Petrol (High Octane)", price: 56 },
  { title: "Refine asphalt", price: 25 },
];

// Companies Data
export const companies: Company[] = [
  {
    id: "company1",
    companyName: "NAMPOWER",
    status: "Accredited",
    location: "Windhoek",
    issueDate: new Date().toDateString(),
    registrationNumber: "fwfa55fsw",
  },
  {
    id: "company2",
    companyName: "City of Windhoek",
    status: "No Credit",
    location: "Windhoek",
    issueDate: "Mon Feb 22 2021",
    registrationNumber: "5fd15afwdw",
  },
  {
    id: "company3",
    companyName: "NORED Electricity",
    status: "No Credit",
    location: "Oshakati",
    issueDate: new Date().toDateString(),
    registrationNumber: "11556ewdf",
  },
  {
    id: "company4",
    companyName: "NCAA",
    status: "Accredited",
    location: "Windhoek",
    issueDate: new Date().toDateString(),
    registrationNumber: "21dfaww",
  },
];

// Addresses data
export const addresses = [
  <>
    <p>Nored Electricity</p>
    <p>Ondangwa</p>
    <p>Ohangwena Region</p>
    <p>Namibia</p>
  </>,
  <>
    <p>NAMPOWER HydroPlant</p>
    <p>Ruacana</p>
    <p>Omusati Region</p>
    <p>Namibia</p>
  </>,
  <>
    <p>Etunda Irrigation Scheme </p>
    <p>Ruacana</p>
    <p>Omusati Region</p>
    <p>Namibia</p>
  </>,
];
