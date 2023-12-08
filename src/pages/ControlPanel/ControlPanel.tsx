import React, { useState } from 'react';
import styles from './ControlPanel.module.css';
import Logo from '../../components/icons/logo';
import Header from '../../components/Header/Header';
import Toolbox from '../../components/Toolbox/Toolbox';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Table from '../../components/Table/Table';
import { CustomerModel } from '../../models/Customer';

type TControlPanelProps = {}

const data = [{
  id: 1,
  fio: 'Осиповский Дмитрий Сергеевич',
  city: 'Калуга',
  type_mk: 'Разработка игры на Python',
  class_school: '11',
  school: 'МБОУ СоШ 17',
  email: 'osipo@ya.ru',
}, {
  id: 2,
  fio: 'Осиповский Дмитрий Сергеевич',
  city: 'Калуга',
  type_mk: 'Разработка игры на Python',
  class_school: '11',
  school: 'МБОУ СоШ 17',
  email: 'osipo@ya.ru',
}, {
  id: 3,
  fio: 'Осиповский Дмитрий Сергеевич',
  city: 'Калуга',
  type_mk: 'Разработка игры на Python',
  class_school: '11',
  school: 'МБОУ СоШ 17',
  email: 'osipo@ya.ru',
}, {
  id: 4,
  fio: 'Осиповский Дмитрий Сергеевич',
  city: 'Калуга',
  type_mk: 'Разработка игры на Python',
  class_school: '11',
  school: 'МБОУ СоШ 17',
  email: 'osipo@ya.ru',
}, {
  id: 5,
  fio: 'Осиповский Дмитрий Сергеевич',
  city: 'Калуга',
  type_mk: 'Разработка игры на Python',
  class_school: '11',
  school: 'МБОУ СоШ 17',
  email: 'osipo@ya.ru',
}, {
  id: 1,
  fio: 'Осиповский Дмитрий Сергеевич',
  city: 'Калуга',
  type_mk: 'Разработка игры на Python',
  class_school: '11',
  school: 'МБОУ СоШ 17',
  email: 'osipo@ya.ru',
}, {
  id: 1,
  fio: 'Осиповский Дмитрий Сергеевич',
  city: 'Калуга',
  type_mk: 'Разработка игры на Python',
  class_school: '11',
  school: 'МБОУ СоШ 17',
  email: 'osipo@ya.ru',
}, {
  id: 1,
  fio: 'Осиповский Дмитрий Сергеевич',
  city: 'Калуга',
  type_mk: 'Разработка игры на Python',
  class_school: '11',
  school: 'МБОУ СоШ 17',
  email: 'osipo@ya.ru',
}, {
  id: 1,
  fio: 'Осиповский Дмитрий Сергеевич',
  city: 'Калуга',
  type_mk: 'Разработка игры на Python',
  class_school: '11',
  school: 'МБОУ СоШ 17',
  email: 'osipo@ya.ru',
}, {
  id: 1,
  fio: 'Осиповский Дмитрий Сергеевич',
  city: 'Калуга',
  type_mk: 'Разработка игры на Python',
  class_school: '11',
  school: 'МБОУ СоШ 17',
  email: 'osipo@ya.ru',
}, {
  id: 1,
  fio: 'Осиповский Дмитрий Сергеевич',
  city: 'Калуга',
  type_mk: 'Разработка игры на Python',
  class_school: '11',
  school: 'МБОУ СоШ 17',
  email: 'osipo@ya.ru',
}, {
  id: 1,
  fio: 'Осиповский Дмитрий Сергеевич',
  city: 'Калуга',
  type_mk: 'Разработка игры на Python',
  class_school: '11',
  school: 'МБОУ СоШ 17',
  email: 'osipo@ya.ru',
}, {
  id: 1,
  fio: 'Осиповский Дмитрий Сергеевич',
  city: 'Калуга',
  type_mk: 'Разработка игры на Python',
  class_school: '11',
  school: 'МБОУ СоШ 17',
  email: 'osipo@ya.ru',
}, {
  id: 1,
  fio: 'Осиповский Дмитрий Сергеевич',
  city: 'Калуга',
  type_mk: 'Разработка игры на Python',
  class_school: '11',
  school: 'МБОУ СоШ 17',
  email: 'osipo@ya.ru',
}, {
  id: 1,
  fio: 'Осиповский Дмитрий Сергеевич',
  city: 'Калуга',
  type_mk: 'Разработка игры на Python',
  class_school: '11',
  school: 'МБОУ СоШ 17',
  email: 'osipo@ya.ru',
}, {
  id: 1,
  fio: 'Осиповский Дмитрий Сергеевич',
  city: 'Калуга',
  type_mk: 'Разработка игры на Python',
  class_school: '11',
  school: 'МБОУ СоШ 17',
  email: 'osipo@ya.ru',
}, {
  id: 1,
  fio: 'Осиповский Дмитрий Сергеевич',
  city: 'Калуга',
  type_mk: 'Разработка игры на Python',
  class_school: '11',
  school: 'МБОУ СоШ 17',
  email: 'osipo@ya.ru',
}, {
  id: 1,
  fio: 'Осиповский Дмитрий Сергеевич',
  city: 'Калуга',
  type_mk: 'Разработка игры на Python',
  class_school: '11',
  school: 'МБОУ СоШ 17',
  email: 'osipo@ya.ru',
}, {
  id: 1,
  fio: 'Осиповский Дмитрий Сергеевич',
  city: 'Калуга',
  type_mk: 'Разработка игры на Python',
  class_school: '11',
  school: 'МБОУ СоШ 17',
  email: 'osipo@ya.ru',
}];

function ControlPanel(props: TControlPanelProps) {
  const [customers, setCustomers] = useState<CustomerModel[]>(data);
  const [selectCustomerID, setCustomerID] = useState(0);

  const is_selected = selectCustomerID !== 0;

  const onSelectCustomer = (id: number) => {
    setCustomerID(id);
  };

  const onUpdateData = () => {
    setCustomerID(0);
  };

  return (
    <section className={styles.root}>
      <section>
        <Header>
          <section className={styles.logo_block}>
            <Logo className={styles.logo} />
            <div className={styles.divider}></div>
            <p className={styles.logo_text}>
              Министерство науки и высшего образования Российской Федерации <br />
              Калужский филиал федерального государственного бюджетного<br />
              образовательного учреждения высшего образования<br />
              «Московский государственный технический университет имени<br />
              Н. Э. Баумана (национальный исследовательский университет)»<br />
              (КФ МГТУ им. Н. Э. Баумана)
            </p>
          </section>
          <div className={styles.about_block}>
            <p className={styles.about}>
              Факультет «Информатика и управление» (ИУК)
            </p>
            <p className={styles.about}>
              Кафедра ИУК2 «Информационные системы и сети»
            </p>
          </div>
        </Header>
        <Toolbox>
          <Form.Control
            className={styles.form_input}
            type={'text'}
            placeholder={'Фильтр по ФИО'}
            size={'lg'}
          />
          <section>
            <Button
              className={styles.btn_action}
              variant={'outline-primary'}
              disabled={!is_selected}
            >
              Распечатать
            </Button>
            <Button
              className={styles.btn_action}
              variant={'outline-danger'}
              disabled={!is_selected}
            >
              Отправить и завершить
            </Button>
          </section>
          <section>
            <Button
              className={styles.btn_action}
              variant={'outline-primary'}
              onClick={onUpdateData}
            >
              Обновить
            </Button>
          </section>
        </Toolbox>
      </section>
      <Table
        data={customers}
        selectedID={selectCustomerID}
        onSelect={onSelectCustomer}
      />
      <section className={'w-100'}>
        <p className={styles.count_clients}>Всего посетителей: 426</p>
      </section>
    </section>
  );
}

export default ControlPanel;
