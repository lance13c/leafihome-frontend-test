import * as React from 'react';
import styles from './index.module.scss';

interface BaseLayoutProps {}

const BaseLayout: React.FunctionComponent<BaseLayoutProps> = () => {
  return <div className={styles.BaseLayout}></div>;
};

export default BaseLayout;
