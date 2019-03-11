import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Login from './components/Login';
import Nav from './components/Nav';
import SignupVolunteer from './components/SignupVolunteer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <Nav />
        </header>

        <main>
          {/* <h1>RePlate</h1> */}
          <Route path="/login" component={Login}/>
          <img id="big-logo" src={require('./replate_badge.png')} alt="RePlate - Feed the Hungry. Reduce Waste."/>
          <Route path="/signup" component={SignupVolunteer}/>
        </main>
      </div>
    );
  }
}

export default App;
