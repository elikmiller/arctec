import React, { Component } from 'react';
import logo from './logo.svg';
import mockup from '../public/img/mockup.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
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
        <a className="navbar-brand" href="#"><img src={logo} alt="ArcTec" /></a>
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

class Photo extends Component {
  render() {
    return (<p>Hi im a photo component</p>);
  }
}

class Gallery extends Component {
  render() {
    return (
      <div className="Gallery">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6">
                <Photo />
              </div>
              <div className="col-md-6">
                <p>img 02</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p>img 03</p>
              </div>
              <div className="col-md-6">
                <p>img 04</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <p>img 05</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <p>img 06</p>
          </div>
          <div className="col-md-4">
            <p>img 07</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <p>img 08</p>
          </div>
          <div className="col-md-8">
            <p>img 09</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <p>img 10</p>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
                <p>img 11</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p>img 12</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <p>img 13</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <p>img 14</p>
          </div>
          <div className="col-md-4">
            <p>img 15</p>
          </div>
          <div className="col-md-4">
            <p>img 16</p>
          </div>
        </div>
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
