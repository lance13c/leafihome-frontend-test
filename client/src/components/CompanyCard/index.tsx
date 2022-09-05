import React from 'react';
import { Company } from 'server/models/company';
import styles from './index.module.scss';

interface CompanyCardProps extends Company {}

const CompanyCard: React.FunctionComponent<CompanyCardProps> = ({ name, address, revenue, phone }) => {
  return (
    <div className={styles.companyCard}>
      <div className={styles.companyCardHeader}>
        <h3>{name}</h3>
      </div>

      <p>{address}</p>
      <p>{phone}</p>
      <h6>${revenue}</h6>
    </div>
  );
};

export default CompanyCard;
