import React, { Component } from 'react';
import s from './Bio.module.scss';

class Bio extends Component {
  render() {
    return (
      <div className={s.container}>
        <h3 className={s.header}>About</h3>
        <p className={s.about}>Coding and developing digital experiences is a job that I find extremely rewarding and fun. Just like putting Lego blocks together into an <a href="Iron Man HulkBuster" target="_blank">Iron Man Hulkbuster</a>, I find the same sensation from putting pieces of code together into pretty user interfaces. Who doesn’t like building stuff and getting paid to do it?! Coding is fun and getting paid for it is even more cool. I’m also really into health and well-being because I strongly believe that great code comes from happy and healthy developers. If I’m not coding, I’m probably in the gym or doing a few laps around the park. I take my coffee black… in case you were wondering.</p>
        <h3 className={s.header}>Projects</h3>
        <p className={s.about}>
          <a><h4>www.somedigitalagency.com</h4></a>
          <a><h4>www.torrespacking.com</h4></a>
        </p>
      </div>
    );
  }
}

export default Bio;
