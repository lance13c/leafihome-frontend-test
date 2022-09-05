import * as React from 'react';
import BaseLayout from '../layouts/BaseLayout';

interface CompaniesPageProps {}

const CompaniesPage: React.FunctionComponent<CompaniesPageProps> = () => {
  React.useEffect(() => {
    const getCompanies = async () => {
      const response = await fetch('http://localhost:3001/companies');

      console.log(response);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    };

    getCompanies();
  }, []);

  return (
    <BaseLayout>
      <h1>Companies</h1>
    </BaseLayout>
  );
};

export default CompaniesPage;
