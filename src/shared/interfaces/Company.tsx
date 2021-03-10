interface Company {
  id: string;
  companyName: string;
  registrationNumber: string;
  issueDate: string;
  location: string;
  status: "Accredited" | "No Credit";
  description?: string;
  amount?: number;
}

export default Company;
