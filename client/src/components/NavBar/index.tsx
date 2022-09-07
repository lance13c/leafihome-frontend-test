import React from 'react';
import styles from './index.module.scss';

interface NavBarProps {}

const NavBar: React.FunctionComponent<NavBarProps> = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navItem}>
        <a href='/'>Home</a>
      </div>
      <div className={styles.navItem}>
        <a href='/companies'>Companies</a>
      </div>
    </nav>
  );
};

export default NavBar;
