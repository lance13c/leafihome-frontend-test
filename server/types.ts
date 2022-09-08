import { CompanySchemeZod } from 'models/company/validator';
import { z } from 'zod';

export type Company = z.infer<typeof CompanySchemeZod>;

export interface Person {
  name: string;
  companyId: string;
  email: string;
}
