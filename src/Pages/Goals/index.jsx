import React, { Fragment } from 'react';
import { Header } from '../../Layout/Header'
import { Footer } from '../../Layout/Footer';
import './Goals.css';

const Goals = () => {
  const daysOfWeek = [
    { name: 'L', checked: false },
    { name: 'M', checked: false },
    { name: 'Mi', checked: true },
    { name: 'J', checked: false },
    { name: 'V', checked: false },
    { name: 'S', checked: true },
    { name: 'D', checked: false }
  ];

  return(
    <Fragment>
      <Header>Logros</Header>
      <div className="container-goals">
      <section className="recordInWeek">
        <div className="yourListenToday">
          <p className="text listenToday">
            Hoy has escuchado <br />
            <span className="timeText">
              0min
            </span>
          </p>
          <p className="text goalToday">
            Comienza a escuchar hoy para lograr tu meta diaria de
            <span>30 min</span>
          </p>
          <div className="progress-circle"></div>
        </div>
        <div className="yourListenInWeek">
          <ul className="daysCompleted">
            {
              daysOfWeek.map(
                (days, index) => <li
                  key={index}
                  className={ days.checked ? 'checked' : '' }
                >
                  {days.name}
                </li>
              )
            }
          </ul>
          <button className="btn btn-text btn-changeGoal">
            Cambiar meta
          </button>
        </div>
        <button className="btn btn-text btn-startListen">
          Comenzar a escuchar
        </button>
      </section>
      <section className="goodResults">
        <p className="text-goodResults">
          ¡Escucha hoy para iniciar una nueva racha!
        </p>
        <div className="goodResultsActually">
          <img src="" alt="" />
          <p className="text-goodResultsActually">
            <span className="timeText">0 dias</span>
            <br />
            Racha actual
          </p>
        </div>
        <div className="goodResultsLongest">
          <img src="" alt="" />
          <p className="text-goodResultsLongest">
            <span className="timeText">0 dias</span>
            <br />
            Racha más actual
          </p>
        </div>
      </section>
      <section className="totalRecord">
        <p className="text-totalRecord">
          Asi has aprovechado tu tiempo:
        </p>
        <div className="container-item">
          <img src="" alt="" />
          <p className="text">
            Has escuchado un total de: 
            <br />
            <span className="total">0 min</span>
          </p>
        </div>
        <div className="container-item">
          <img src="" alt="" />
          <p className="text">
            Escuchaste lo equivalente a leer: 
            <br />
            <span className="total">0 páginas</span>
          </p>
        </div>
        <div className="container-item">
          <img src="" alt="" />
          <p className="text">
            Has terminado: 
            <br />
            <span className="total">0 audiolibros</span>
          </p>
        </div>
      </section>
      </div>
      <Footer />
    </Fragment>
  );
};

export {Goals};
