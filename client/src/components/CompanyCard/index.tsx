import React from 'react';
import { Company } from '../../../../server/types';
import styles from './index.module.scss';

interface CompanyCardProps extends Company {}

const CompanyCard: React.FunctionComponent<CompanyCardProps> = ({ name, address, revenue, phone, _id: id }) => {
  return (
    <div className={styles.companyCard}>
      <div className={styles.companyCardHeader}>
        <h3>{name}</h3>
      </div>

      <p>{id}</p>
      <p>{address}</p>
      <p>{phone}</p>
      <h6>${revenue}</h6>
    </div>
  );
};

export default CompanyCard;
