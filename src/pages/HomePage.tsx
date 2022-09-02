import React from 'react';
import BaseLayout from '../layouts/BaseLayout';

interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
  return (
    <BaseLayout>
      <h1>Home Hi</h1>
    </BaseLayout>
  );
};

export default HomePage;
