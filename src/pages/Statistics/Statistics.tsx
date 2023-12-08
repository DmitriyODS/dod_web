import React from 'react';
import styles from './Statistics.module.css';
import Header from '../../components/Header/Header';
import Logo from '../../components/icons/logo';

type TStatisticsProps = {}

function Statistics(props: TStatisticsProps) {
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
      </section>
      <section className={'text-center mt-4'}>
        <h1>Общее кол-во: 426</h1>
        <h2 className={'mt-4'}>Мастер-класс: Создай веб-приложение «Записная книжка»</h2>
        <h1>213</h1>
        <h2 className={'mt-4'}>Мастер-класс: Создай игру на Python</h2>
        <h1>213</h1>
      </section>
    </section>
  );
}

export default Statistics;
