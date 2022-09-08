import { CompanySchemeZod } from '../../../server/models/company/validator';
import { Company } from '../../../server/types';

export const getCompany = async (companyId?: string): Promise<null | Company> => {
  if (companyId) {
    try {
      const response = await fetch(`http://localhost:3001/companies/${companyId}`, {
        method: 'GET',
      });
      const company: Company = response.json();
      CompanySchemeZod.parse(company);

      return company;
    } catch (err) {
      console.error(err);
    }
  } else {
    console.info('No company id provided');
  }

  return null;
};
