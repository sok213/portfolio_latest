import React, { Component } from 'react';
import s from './Footer.module.scss';

class Footer extends Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.content}>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/sophanarith-sok-a50097b7/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
              <a href="https://codepen.io/sok213/" target="_blank" rel="noopener noreferrer">CodePen</a>
            </li>
            <li>
              <a href="https://blog.paralect.com/post/3-ux-design-trends-are-hurting-your-online-business" target="_blank" rel="noopener noreferrer">Blog</a>
            </li>
            <li>
              <a href="https://github.com/sok213?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
