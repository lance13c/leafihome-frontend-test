import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Company } from '../../../../server/types';
import styles from './index.module.scss';

interface CompanyCardProps extends Company {}

const CompanyCard: React.FunctionComponent<CompanyCardProps> = ({ name, address, revenue, phone, _id: id }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/companies/${id}`);
  };

  return (
    <div className={styles.companyCard} onClick={handleOnClick}>
      <div className={styles.companyCardHeader}>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default CompanyCard;
