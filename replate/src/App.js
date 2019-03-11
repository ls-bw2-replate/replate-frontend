import React, { Component } from 'react';

import SignupVolunteer from './components/SignupVolunteer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <div className="nav__left">
            <a href="#">Login</a>
            </div>
            <div className="nav__right">
            <a href="#">Home</a>
            <a href="#">Sign Up</a>
            </div>
          </nav>
        </header>

        <main>
          <SignupVolunteer />
        </main>
      </div>
    );
  }
}

export default App;
