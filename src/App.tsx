import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CompaniesPage from './pages/CompaniesPage';
import HomePage from './pages/HomePage';

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/companies' element={<CompaniesPage />} />
      </Routes>
    </div>
  );
};

export default App;
