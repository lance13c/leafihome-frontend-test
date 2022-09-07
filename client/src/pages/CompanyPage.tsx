import { Company } from '@server/types';
import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

import BaseLayout from '../layouts/BaseLayout';
import PagePadding from '../layouts/PagePadding';

interface CompanyPageProps {}

const formatCurrencyUSD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const CompanyPage: React.FunctionComponent<CompanyPageProps> = () => {
  const [company, setCompany] = React.useState<Company | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    const getCompany = async () => {
      if (id) {
        try {
          const response = await fetch(`http://localhost:3001/companies/${id}`, {
            method: 'GET',
          });
          const data = await response.json();

          setCompany(data);
        } catch (e) {
          console.error(e);
          navigate('/404');
        }
      }
    };

    getCompany();
  }, [id]);

  return (
    <BaseLayout>
      <NavBar />
      <PagePadding>
        {company && <h1>{company.name}</h1>}
        {company && (
          <p>
            Address: <span>{company.address}</span>
          </p>
        )}
        {company && (
          <p>
            Phone Number: <span>{company.phone}</span>
          </p>
        )}
        {company && (
          <p>
            Revenue: <span>{formatCurrencyUSD.format(company.revenue)}</span>
          </p>
        )}
      </PagePadding>
    </BaseLayout>
  );
};

export default CompanyPage;
