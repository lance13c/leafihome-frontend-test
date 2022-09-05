import React from 'react';
import styles from './index.module.scss';

interface CompanyCardContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

const CompanyCardContainer: React.FunctionComponent<CompanyCardContainerProps> = ({ children }) => {
  return <section className={styles.companyCardContainer}>{children}</section>;
};

export default CompanyCardContainer;
