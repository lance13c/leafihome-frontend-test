import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Page404 from './pages/404';
import CompaniesPage from './pages/CompaniesPage';
import CompanyPage from './pages/CompanyPage';
import CreateCompanyPage from './pages/CreateCompanyPage';
import HomePage from './pages/HomePage';

interface AppProps {
  tab: string;
}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/companies/create' element={<CreateCompanyPage />} />
        <Route path='/companies/:id' element={<CompanyPage />} />
        <Route path='/companies' element={<CompaniesPage />} />
        <Route path='/404' element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default App;
