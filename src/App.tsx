import React, { Component } from 'react';
//import logo from './logo.svg';
import './styles/App.css';
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
        <footer className="App-footer">
          © 2019 Daniel Dudink - 
        </footer>
      </div>
    );
  }
}

export default App;
