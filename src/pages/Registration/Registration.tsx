import React, { useState } from 'react';
import styles from './Registration.module.css';
import Header from '../../components/Header/Header';
import Logo from '../../components/icons/logo';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { CustomerDto } from '../../models/Customer';
import { toast } from 'react-toastify';

type TRegistrationProps = {}

function Registration(props: TRegistrationProps) {
  const params = useParams();
  const [fio, setFio] = useState('');
  const [city, setCity] = useState('');
  const [school, setSchool] = useState('');
  const [class_school, setClassSchool] = useState('');
  const [email, setEmail] = useState('');

  const [isLoading, setLoading] = useState(false);
  const [isRegistered, setRegistered] = useState(false);

  const onSubmitData = (e: any) => {
    e.preventDefault();
    if (fio === '' || city === '' || school === '' || class_school === '' || email === '') {
      toast.error('Не все поля были заполнены', { position: toast.POSITION.BOTTOM_CENTER });
      return;
    }

    const data: CustomerDto = {
      id: 0,
      fio: fio,
      city: city,
      school: school,
      class_school: class_school,
      email: email,
      type_mk: Number(params.type_mk),
    };

    setLoading(true);

    const resReq = new Promise((resolve, reject) => {
      console.log(data);
      setTimeout(() => {
        resolve('ok');
      }, 2000);
    });

    resReq.then((value) => {
      setRegistered(true);
      setLoading(false);
    });
  };

  const renderForm = () => {
    if (isRegistered) {
      return <h2 className={styles.finished_reg}>Спасибо за регистрацию!</h2>;
    }

    return (
      <Form className={styles.form_box} onSubmit={onSubmitData}>
        <h3 className={'mb-4 text-center'}>Регистрация</h3>
        <Form.Group className={'mb-3 w-100'}>
          <Form.Control
            className={styles.form_input}
            size={'lg'}
            type={'text'}
            placeholder={'ФИО'}
            value={fio}
            onChange={(e: any) => setFio(e.target.value)}
            disabled={isLoading}
          />
        </Form.Group>
        <Form.Group className={'mb-3 w-100'}>
          <Form.Control
            className={styles.form_input}
            size={'lg'}
            type={'email'}
            placeholder={'Email'}
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            disabled={isLoading}
          />
        </Form.Group>
        <Form.Group className={'mb-3 w-100'}>
          <Form.Control
            className={styles.form_input}
            size={'lg'}
            type={'text'}
            placeholder={'Школа'}
            value={school}
            onChange={(e: any) => setSchool(e.target.value)}
            disabled={isLoading}
          />
        </Form.Group>
        <Form.Group className={'mb-3 w-100'}>
          <Form.Control
            className={styles.form_input}
            size={'lg'}
            type={'text'}
            placeholder={'Класс'}
            value={class_school}
            onChange={(e: any) => setClassSchool(e.target.value)}
            disabled={isLoading}
          />
        </Form.Group>
        <Form.Group className={'mb-4 w-100'}>
          <Form.Control
            className={styles.form_input}
            size={'lg'}
            type={'text'}
            placeholder={'Город'}
            value={city}
            onChange={(e: any) => setCity(e.target.value)}
            disabled={isLoading}
          />
        </Form.Group>
        <Button
          className={styles.btn_submit}
          variant={(params.type_mk === '1') ? 'outline-secondary' : 'outline-success'}
          type={'submit'}
          disabled={isLoading}
        >
          Отправить
        </Button>
      </Form>
    );
  };

  return (
    <section className={styles.root}>
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
      <main className={styles.content}>
        <div className={styles.main_content}>
          <section className={styles.content_header}>
            <h3 className={styles.header_text_1}>
              Добро пожаловать на
            </h3>
            <h1 className={styles.header_text_1}>
              МАСТЕР-КЛАСС
            </h1>
            {(Number(params.type_mk) === 1) ? (
              <h3 className={styles.header_text_2}>
                Создай веб-приложение<br />
                «Записная книжка»
              </h3>
            ) : (
              <h3 className={styles.header_text_2_2}>
                Разработка игры на Python
              </h3>
            )}
          </section>
          {renderForm()}
        </div>
      </main>
    </section>
  );
}

export default Registration;
