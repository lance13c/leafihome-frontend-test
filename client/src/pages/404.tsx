import * as React from 'react';
import BaseLayout from '../layouts/BaseLayout';

interface Page404Props {}

const Page404: React.FunctionComponent<Page404Props> = () => {
  return (
    <BaseLayout>
      <h1>404 Something Went Wrong</h1>
    </BaseLayout>
  );
};

export default Page404;
