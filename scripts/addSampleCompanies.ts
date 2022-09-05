import { CompanySchema } from 'server/models/company';
import { COMPANY_LIST_SHORT } from '../sample_data/company/companyList';

COMPANY_LIST_SHORT.forEach(async (val: typeof CompanySchema) => {
  await fetch('http://localhost:3001/companies', {
    method: 'POST',
    body: JSON.stringify(val),
  });
});
