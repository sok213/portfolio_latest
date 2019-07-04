import React, { Component } from 'react';
import s from './Jumbotron.module.scss';
import Particles from 'react-particles-js';
import ParticlesParams from './particles.json';
import head from './../../images/head.png';

class Jumbotron extends Component {
  render() {
    const name = '<SophanarithSok />';

    return (
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.particlesContainer}>
            <Particles params={ParticlesParams} />
          </div>
          <div className={s.title}>
            <div className={s.imgContainer}>
              <img src={head} alt="profile" />
            </div>
            <h2 className={s.name}>{name}</h2>
            <p>Front-End Developer</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
