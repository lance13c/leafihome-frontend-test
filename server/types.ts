export interface Company {
  _id?: string;
  _v?: string;
  name: string;
  address: string;
  revenue: number;
  phone: string;
}

export interface Person {
  name: string;
  companyId: string;
  email: number;
}
