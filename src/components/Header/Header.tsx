import React from 'react';
import styles from './Header.module.css';

type THeaderProps = {
  children: any;
}

function Header(props: THeaderProps) {
  return (
    <header className={styles.root}>
      {props.children}
    </header>
  );
}

export default Header;
