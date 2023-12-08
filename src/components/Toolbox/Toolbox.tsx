import React from 'react';

import styles from './Toolbox.module.css';

type TPropsToolbox = {
  children: any;
};

function Toolbox(props: TPropsToolbox) {
  return <div className={styles.root}>{props.children}</div>;
}

export default Toolbox;