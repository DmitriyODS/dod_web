import React from 'react';
import styles from './Table.module.css';
import { CustomerModel } from '../../models/Customer';

type TTableProps = {
  data: CustomerModel[];
  selectedID: number;
  onSelect: (id: number) => void;
  isLoading: boolean;
}

type TTableItemProps = {
  id: number;
  fio: string;
  type_mk_str: string;
  onSelect: (id: number) => void;
  is_selected: boolean;
}

export function TableItem(props: TTableItemProps) {
  let selected_class = '';
  if (props.is_selected) {
    selected_class = styles.item_selected;
  }

  return (
    <div className={`${styles.item} ${selected_class}`}
         onClick={() => props.onSelect(props.id)}
    >
      <p>{props.id}</p>
      <p>{props.fio}</p>
      <p>{props.type_mk_str}</p>
    </div>
  );
}

function Table(props: TTableProps) {
  const renderBody = () => {
    if (props.isLoading) {
      return <p className={styles.not_data_txt}>загрузка ...</p>;
    }

    if (props.data.length === 0) {
      return <p className={styles.not_data_txt}>нет новых участников</p>;
    }

    return props.data.map((it, index) => (
      <TableItem
        id={index + 1}
        fio={it.fio}
        type_mk_str={it.type_mk}
        onSelect={props.onSelect}
        is_selected={props.selectedID === it.id}
      />
    ));
  };

  return (
    <div className={styles.root}>
      <section className={styles.headers}>
        <h3 className={styles.header_item}>№</h3>
        <h3 className={styles.header_item}>ФИО</h3>
        <h3 className={styles.header_item}>Мастер-класс</h3>
      </section>
      <div className={styles.content}>
        {renderBody()}
      </div>
    </div>
  );
}

export default Table;
