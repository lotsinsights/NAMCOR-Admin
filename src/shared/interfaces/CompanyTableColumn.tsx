interface CompanyTableColumn {
  id: "companyName" | "location" | "status";
  label: string;
  minWidth?: number;
  align?: "left";
}

export default CompanyTableColumn;
