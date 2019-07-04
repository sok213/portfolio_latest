import React, { Component } from 'react';
import s from './App.module.scss';
import Jumbotron from './components/Jumbotron/Jumbotron';
import TextCard from './components/TextCard/TextCard';
import Bio from './components/Bio/Bio';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div className={s.appContainer}>
        <Jumbotron />
        <TextCard />
        <Bio />
        <Footer />
      </div>
    );
  }
}

export default App;
