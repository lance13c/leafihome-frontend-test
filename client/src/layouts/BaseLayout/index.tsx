import * as React from 'react';
import styles from './index.module.scss';

interface BaseLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const BaseLayout: React.FunctionComponent<BaseLayoutProps> = ({ children }) => {
  return <div className={styles.BaseLayout}>{children}</div>;
};

export default BaseLayout;
