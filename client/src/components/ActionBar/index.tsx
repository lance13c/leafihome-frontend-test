import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';

interface ActionBarProps {}

const ActionBar: React.FunctionComponent<ActionBarProps> = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/companies/create');
  };

  return (
    <div className={styles.actionBar}>
      <button onClick={handleOnClick} className={styles.actionButton}>
        Create Company
      </button>
    </div>
  );
};

export default ActionBar;
