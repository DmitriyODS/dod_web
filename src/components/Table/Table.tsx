import React from 'react';
import styles from './Table.module.css';

type TTableProps = {}

function Table(props: TTableProps) {
  return (
    <div className={styles.root}>
      <section className={styles.headers}>
        <h3 className={styles.header_item}>№</h3>
        <h3 className={styles.header_item}>ФИО</h3>
        <h3 className={styles.header_item}>Мастер-класс</h3>
      </section>
      <div className={styles.content}>

      </div>
    </div>
  );
}

export default Table;
