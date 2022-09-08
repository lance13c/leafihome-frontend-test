import * as React from 'react';
import zod from 'zod';
import { CompanySchemeZod } from '../../../server/models/company/validator';
import { Company } from '../../../server/types';
import ActionBar from '../components/ActionBar';
import CompanyCard from '../components/CompanyCard';
import CompanyCardContainer from '../components/components/CompanyCardContainer';
import NavBar from '../components/NavBar';
import BaseLayout from '../layouts/BaseLayout';
import PagePadding from '../layouts/PagePadding';

interface CompaniesPageProps {}

const CompaniesPage: React.FunctionComponent<CompaniesPageProps> = () => {
  const [companies, setCompanies] = React.useState<Company[]>([]);

  React.useEffect(() => {
    const getCompanies = async () => {
      try {
        const response = await fetch('http://localhost:3001/companies');

        if (response.ok) {
          const data = await response.json();
          const companies = zod.array(CompanySchemeZod).parse(data);
          setCompanies(companies);
        }
      } catch (err) {
        // Show Client Side
        console.error(err);
      }
    };

    getCompanies();
  }, []);

  return (
    <BaseLayout>
      <NavBar />
      <PagePadding>
        <h1>Companies</h1>
        <ActionBar />
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
