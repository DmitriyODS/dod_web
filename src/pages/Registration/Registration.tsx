import React from 'react';
import styles from './Registration.module.css';
import Header from '../../components/Header/Header';
import Logo from '../../components/icons/logo';

type TRegistrationProps = {}

function Registration(props: TRegistrationProps) {
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
        <section className={styles.content_header}>
          <h3 className={styles.header_text_1}>
            Добро пожаловать на
          </h3>
          <h1 className={styles.header_text_1}>
            МАСТЕР-КЛАСС
          </h1>
          <h2 className={styles.header_text_2}>
            Создай веб-приложение<br />
            «Записная книжка»
          </h2>
        </section>
      </main>
    </section>
  );
}

export default Registration;
