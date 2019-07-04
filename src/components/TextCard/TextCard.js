import React, { Component } from 'react';
import s from './TextCard.module.scss';
import { Animated } from 'react-animated-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { 
    faJsSquare, 
    faReact,
    faHtml5,
    faCss3Alt
} from '@fortawesome/free-brands-svg-icons';

class TextCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    renderSection = () => {
      return (
        <div className={s.textContent} key={4}>
            <Animated animationIn="fadeIn" isVisible={true}>
                <div>
                  <h3 className={s.header}>Skills</h3>
                </div>
            </Animated>
            <div className={s.techIconsContainer}>
                <Animated animationIn="fadeInLeft" isVisible={true}>
                    <ul className={s.techIcons}>
                        <li>
                            <a 
                                className={`${s.icon} ${s.javascriptLogo}`}
                                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faJsSquare} className={s.javascriptLogo} />
                                <span className={s.subText}>JavaScript</span>
                            </a>
                        </li>
                        <li>
                            <a 
                                className={`${s.icon} ${s.reactLogo}`}
                                href="https://reactjs.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faReact}/>
                                <span className={s.subText}>React</span>
                            </a>
                        </li>
                        <li>
                            <a 
                                className={`${s.icon} ${s.htmlLogo}`}
                                href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faHtml5}/>
                                <span className={s.subText}>HTML 5</span>
                            </a>
                        </li>
                        <li>
                            <a 
                                className={`${s.icon} ${s.cssLogo}`}
                                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faCss3Alt}/>
                                <span className={s.subText}>CSS 3</span>
                            </a>
                        </li>
                    </ul>
                </Animated>
            </div>
        </div>
      );
    }

    renderButton = () => {
        if(this.state.activeSection === 1) {
            return (
                <button onClick={this.nextSlide} className={s.navButton}>
                    <span className={s.buttonText}>Next</span>
                    <FontAwesomeIcon icon={faAngleRight} className={s.navIcon} />
                </button>
            );
        } else if (this.state.activeSection === 2 || this.state.activeSection === 3) {
            return (
                <div className={s.horizontalButtonsContainer}>
                    <div className={s.horizontalButtons}>
                        <button onClick={this.prevSlide} className={s.navButton}>
                            <FontAwesomeIcon icon={faAngleLeft} className={s.navIcon} />
                            <span className={s.buttonText}>Back</span>
                        </button>
                        <button onClick={this.nextSlide} className={s.navButton}>
                            <span className={s.buttonText}>Next</span>
                            <FontAwesomeIcon icon={faAngleRight} className={s.navIcon} />
                        </button>
                    </div>
                </div>
            );
        } else if (this.state.activeSection === 4) {
            return (
                <div className={s.horizontalButtonsContainer}>
                    <div className={s.horizontalButtons}>
                        <button onClick={this.prevSlide} className={s.navButton}>
                            <FontAwesomeIcon icon={faAngleLeft} className={s.navIcon} />
                            <span className={s.buttonText}>Back</span>
                        </button>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div className={s.textCardContainer}>
                {this.renderSection()}
            </div>
        );
    }
}

export default TextCard;
