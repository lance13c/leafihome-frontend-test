import * as React from 'react';
import { Company } from '../../../server/types';
import CompanyCard from '../components/CompanyCard';
import CompanyCardContainer from '../components/components/CompanyCardContainer';
import BaseLayout from '../layouts/BaseLayout';
import PagePadding from '../layouts/PagePadding';

interface CompaniesPageProps {}

const CompaniesPage: React.FunctionComponent<CompaniesPageProps> = () => {
  const [companies, setCompanies] = React.useState<Company[]>([]);

  React.useEffect(() => {
    const getCompanies = async () => {
      const response = await fetch('http://localhost:3001/companies');

      if (response.ok) {
        const data = await response.json();
        setCompanies(data);
        console.log(data);
      }
    };

    getCompanies();
  }, []);

  return (
    <BaseLayout>
      <PagePadding>
        <h1>Companies</h1>

        <CompanyCardContainer>
          {companies.map((company) => {
            return <CompanyCard key={company?._id} {...company}></CompanyCard>;
          })}
        </CompanyCardContainer>
      </PagePadding>
    </BaseLayout>
  );
};

export default CompaniesPage;
