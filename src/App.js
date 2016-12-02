import React, { Component } from 'react';
import logo from './logo.svg';
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
    var file = this.props.src;
    return (<p>hi</p>);
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
                <img src={require('../public/img/01.jpg')} className="img-fluid"/>
              </div>
              <div className="col-md-6">
                <img src={require('../public/img/02.jpg')} className="img-fluid"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img src={require('../public/img/03.jpg')} className="img-fluid"/>
              </div>
              <div className="col-md-6">
                <img src={require('../public/img/04.jpg')} className="img-fluid"/>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img src={require('../public/img/05.jpg')} className="img-fluid"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <img src={require('../public/img/06.jpg')} className="img-fluid"/>
          </div>
          <div className="col-md-4">
            <img src={require('../public/img/07.jpg')} className="img-fluid"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src={require('../public/img/08.jpg')} className="img-fluid"/>
          </div>
          <div className="col-md-8">
            <img src={require('../public/img/09.jpg')} className="img-fluid"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src={require('../public/img/10.jpg')} className="img-fluid"/>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
                <img src={require('../public/img/11.jpg')} className="img-fluid"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <img src={require('../public/img/12.jpg')} className="img-fluid"/>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img src={require('../public/img/13.jpg')} className="img-fluid"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src={require('../public/img/14.jpg')} className="img-fluid"/>
          </div>
          <div className="col-md-4">
            <img src={require('../public/img/15.jpg')} className="img-fluid"/>
          </div>
          <div className="col-md-4">
            <img src={require('../public/img/16.jpg')} className="img-fluid"/>
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
