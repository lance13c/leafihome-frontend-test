import React from 'react';
import styles from './index.module.scss';
interface PagePaddingProps {
  children: React.ReactNode | React.ReactNode[];
}

const PagePadding: React.FunctionComponent<PagePaddingProps> = ({ children }) => {
  return <div className={styles.PagePadding}>{children}</div>;
};

export default PagePadding;
