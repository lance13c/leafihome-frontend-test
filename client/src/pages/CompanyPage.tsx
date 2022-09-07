import { Company } from '@server/types';
import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import BaseLayout from '../layouts/BaseLayout';
import PagePadding from '../layouts/PagePadding';

interface CompanyPageProps {}

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
      <PagePadding>
        <h1>Company</h1>
        {company && <h2>{company.name}</h2>}
      </PagePadding>
    </BaseLayout>
  );
};

export default CompanyPage;
