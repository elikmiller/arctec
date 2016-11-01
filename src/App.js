import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <a className="navbar-brand" href="#">ArcTec</a>
        <ul className="nav navbar-nav float-xs-right">
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

class Gallery extends Component {
  render() {
    return (
      <div className="Gallery">
        Gallery
      </div>
    );
  }
}
class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        Footer
      </div>
    );
  }
}
export default App;
