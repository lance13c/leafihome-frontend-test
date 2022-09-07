import { debounce, isNumber } from 'lodash-es';
import * as React from 'react';
import { COMPANY_DEFAULT } from '../../../server/constants';
import { Company } from '../../../server/types';
import BaseLayout from '../layouts/BaseLayout';

interface CreateCompanyPageProps {}

const DEBOUNCE_WAIT_TIME = 200;

const CreateCompanyPage: React.FunctionComponent<CreateCompanyPageProps> = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const companyNameRef = React.useRef<HTMLInputElement | null>(null);
  const companyAddressRef = React.useRef<HTMLInputElement | null>(null);
  const companyPhoneNumberRef = React.useRef<HTMLInputElement | null>(null);
  const companyRevenueRef = React.useRef<HTMLInputElement | null>(null);

  const createCompany = async (company: Company) => {
    setIsLoading(true);

    const response = await fetch('https://localhost:3001/companies', {
      method: 'POST',
      body: JSON.stringify(company),
    });

    console.log('response: ' + response);
    setIsLoading(false);
  };

  const getInputFieldValues = (): Company | null => {
    if (
      companyNameRef?.current &&
      companyAddressRef?.current &&
      companyPhoneNumberRef?.current &&
      companyRevenueRef?.current
    ) {
      const name = companyNameRef?.current?.value ?? COMPANY_DEFAULT.name;
      const address = companyAddressRef?.current?.value ?? COMPANY_DEFAULT.address;
      const phoneNumber = companyPhoneNumberRef?.current?.value ?? COMPANY_DEFAULT.phone;
      const revenueAsText = companyRevenueRef?.current?.value ?? `${COMPANY_DEFAULT.revenue}`;

      const revenue = parseInt(revenueAsText, 10);
      if (!isNumber(revenue)) {
        throw new Error('Revenue must be a number');
      }

      return {
        name,
        address,
        phone: phoneNumber,
        revenue,
      };
    }

    return null;
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const company = getInputFieldValues();
    if (!company) {
      throw new Error('Company does not exist. Error parsing input values.');
    }

    debounce(() => {
      createCompany(company);
    }, DEBOUNCE_WAIT_TIME);
  };

  return (
    <BaseLayout>
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
    </BaseLayout>
  );
};

export default CreateCompanyPage;
