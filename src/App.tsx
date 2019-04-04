import React, { Component } from 'react';
//import logo from './logo.svg';
import './styles/App.css';

import { Landing } from "./components/Landing";
import { Menu } from "./components/Menu"
import ProjectCarousel from './components/ProjectCarousel';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu/>
          <ProjectCarousel/>
        </header>
      </div>
    );
  }
}

export default App;
