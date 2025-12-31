import React from 'react';
import styles from './header.module.css';

function Header(): React.ReactElement {
  return (
    <div className={styles.header__box}>
      <p>Header</p>
    </div>
  );
}

export default Header;
