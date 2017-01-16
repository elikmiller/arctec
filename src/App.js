import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem,Row,Grid,Col,Image} from 'react-bootstrap'
import img1 from '../public/img/01.jpg'

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
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Image href="#" src={logo} />
          </Navbar.Brand>
        </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">About</NavItem>
            <NavItem eventKey={2} href="#">Contact</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
    </Navbar>
    );
  }
}

// class Photo extends Component {
//   render() {
//     var file = this.props.src;
//     return (<p>hi</p>);
//   }
// }

class Gallery extends Component {
  render() {
    return (
      <Grid className="Gallery">
         <Row className="show-grid">
           <Col lg={8} md={8}>
             <Row>
               <Col md={6} responsive >
                 <Image src={img1} responsive />
               </Col>
               <Col md={6}>
                 <Image src={require('../public/img/02.jpg')} responsive />
               </Col>
             </Row>
             <Row>
               <Col md={6}>
                 <Image src={require('../public/img/03.jpg')} responsive />
               </Col>
               <Col md={6}>
                 <Image src={require('../public/img/04.jpg')} responsive />
               </Col>
             </Row>
           </Col>
           <Col lg={4} md={4}>
             <Image src={require('../public/img/05.jpg')} responsive />
           </Col>
         </Row>
         <Row className="show-grid">
           <Col md={8}>
             <Image src={require('../public/img/06.jpg')} responsive />
           </Col>
           <Col md={4}>
             <Image src={require('../public/img/07.jpg')} responsive />
           </Col>
         </Row>
         <Row>
           <Col md={4}>
             <Image src={require('../public/img/08.jpg')} responsive />
           </Col>
           <Col md={8}>
             <Image src={require('../public/img/09.jpg')} responsive />
           </Col>
         </Row>
         <Row>
           <Col md={4}>
             <Image src={require('../public/img/10.jpg')} responsive />
           </Col>
           <Col md={4}>
             <Row>
               <Col md={12}>
                 <Image src={require('../public/img/11.jpg')} responsive />
               </Col>
             </Row>
             <Row>
               <Col md={12}>
                 <Image src={require('../public/img/12.jpg')} responsive />
               </Col>
             </Row>
           </Col>
           <Col md={4}>
             <Image src={require('../public/img/13.jpg')} responsive />
           </Col>
         </Row>
         <Row>
           <Col md={4}>
             <Image src={require('../public/img/14.jpg')} responsive />
           </Col>
           <Col md={4}>
             <Image src={require('../public/img/15.jpg')} responsive />
           </Col>
           <Col md={4}>
             <Image src={require('../public/img/16.jpg')} responsive />
           </Col>
         </Row>
       </Grid>
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
