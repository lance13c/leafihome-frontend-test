import { debounce } from 'lodash-es';
import * as React from 'react';
import { CompanySchemeZod } from '../../../server/models/company/validator';
import { Company } from '../../../server/types';
import NavBar from '../components/NavBar';
import BaseLayout from '../layouts/BaseLayout';
import PagePadding from '../layouts/PagePadding';

interface CreateCompanyPageProps {}

const DEBOUNCE_WAIT_TIME = 200;

const CreateCompanyPage: React.FunctionComponent<CreateCompanyPageProps> = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const companyNameRef = React.useRef<HTMLInputElement | null>(null);
  const companyAddressRef = React.useRef<HTMLInputElement | null>(null);
  const companyPhoneNumberRef = React.useRef<HTMLInputElement | null>(null);
  const companyRevenueRef = React.useRef<HTMLInputElement | null>(null);

  const createCompany = debounce(async (company: Company) => {
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3001/companies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(company),
      });

      if (!response.ok) {
        throw new Error('Error creating company');
      }
    } catch (e) {
      // TODO Make this user facing
      console.error(e);
    }

    setIsLoading(false);
  }, DEBOUNCE_WAIT_TIME);

  const getInputFieldValues = (): Company | null => {
    if (
      companyNameRef?.current &&
      companyAddressRef?.current &&
      companyPhoneNumberRef?.current &&
      companyRevenueRef?.current
    ) {
      const name = companyNameRef?.current?.value;
      const address = companyAddressRef?.current?.value;
      const phoneNumber = companyPhoneNumberRef?.current?.value;

      const revenueAsText = companyRevenueRef?.current?.value;

      // TODO: Don't default revenue, find better solution to handle nan return
      const revenue = parseInt(revenueAsText, 10) || 0;

      // TODO abstract to validator or helper function
      // Convert revenue to have cents as the decimal
      const revenueAsCents = revenue * 100;
      const company: Company = {
        name,
        address,
        phone: phoneNumber,
        revenue: revenueAsCents,
      };

      try {
        CompanySchemeZod.parse(company);

        return company;
      } catch (err) {
        console.error(err);
        return null;
      }
    }

    return null;
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('onSubmit');
    const company = getInputFieldValues();
    console.log('after fields', company);

    if (!company) {
      throw new Error('Company does not exist. Error parsing input values.');
    }

    createCompany(company);
  };

  return (
    <BaseLayout>
      <NavBar />
      <PagePadding>
        <h1>Add A Company</h1>
        <section>
          <div className='form-container'>
            <form id='company-form' onSubmit={handleOnSubmit}>
              <input ref={companyNameRef} name='company_name' required type='text' placeholder='Company Name' />
              <input ref={companyAddressRef} name='company_address' type='text' placeholder='Company Address' />
              <input
                ref={companyPhoneNumberRef}
                name='company_phone_number'
                type='tel'
                placeholder='Company Phone Number'
              />
              <input
                ref={companyRevenueRef}
                name='company_revenue'
                type='number'
                placeholder='Company Revenue For The Previous Year'
              />
            </form>
          </div>

          <button type='submit' form='company-form'>
            Submit
          </button>
        </section>
      </PagePadding>
    </BaseLayout>
  );
};

export default CreateCompanyPage;
