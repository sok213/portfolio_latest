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
              <a href="https://medium.com/@sok213" target="_blank" rel="noopener noreferrer">Medium</a>
            </li>
            <li>
              <a href="https://blog.paralect.com/post/3-ux-design-trends-are-hurting-your-online-business" target="_blank" rel="noopener noreferrer">Blog</a>
            </li>
            <li>
              <a href="mailto:sokcodes@gmail.com" target="_top" rel="noopener noreferrer">Email</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
