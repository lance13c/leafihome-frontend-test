import React from 'react';
import NavBar from '../components/NavBar';
import BaseLayout from '../layouts/BaseLayout';
import PagePadding from '../layouts/PagePadding';

interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
  return (
    <BaseLayout>
      <NavBar />
      <PagePadding>
        <h1>Home</h1>
      </PagePadding>
    </BaseLayout>
  );
};

export default HomePage;
