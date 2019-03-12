import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Login from './components/Login';
import Nav from './components/Nav';
import Signup from './components/Signup';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <Nav />
        </header>

        <main>
          {/* <Route exact path="/" render={props => (
            <img id="big-logo" src={require('./replate_badge.png')} alt="RePlate - Feed the Hungry. Reduce Waste."/>
            )}/> */}

          <Route path="/login" component={Login}/>
          <img id="big-logo" src={require('./replate_badge.png')} alt="RePlate - Feed the Hungry. Reduce Waste."/>
          <Route path="/signup" component={Signup}/>
        </main>
      </div>
    );
  }
}

export default App;
