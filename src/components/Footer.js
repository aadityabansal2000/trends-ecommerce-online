import React from 'react'
import {Link} from 'react-router-dom'
import logo from './constants/logo.png';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
export default function Footer() {
const handleScrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
  <div className="footer" >
      <a
        href="#"
        id="navBackToTop"
        aria-label="Back to top"
        onClick={handleScrollToTop}
      >
        <div className="navFooterBackToTop">
          <span className="navFooterBackToTopText">Back to top</span>
        </div>
      </a>
      <section className="w-100">
        <Container className="container">
          <div className="logo2">
         <img src={logo} alt="footer/logo"  style={{width: "80px", height:"40px"}}/>  <span style={{fontSize:"25px"}}>Trends</span> 
          </div>

          <Nav className="nav">
            <Nav.Item>
              <Nav.Link className="text-white">
                Conditions of Use & Sale
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="text-white">Privacy Notice</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="text-white">Interest-Based Ads</Nav.Link>
            </Nav.Item>
          </Nav>

          <div className="copyright">
            <p>
              &copy;{' '}
               Trends <br /> All Rights Reserved 2024
            </p>
          </div>
          <Nav className="nav wrapper">
            <ul>
              <li className="facebook">
                <a href="https://www.facebook.com/aaditya.bansal.923/">
                  <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
                </a>
              </li>
              <li className="twitter">
                <a href="https://twitter.com/Aaditya12019864">
                  <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
                </a>
              </li>
              <li className="instagram">
                <a href="https://www.instagram.com/bansal_aaditya/">
                  <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
                </a>
              </li>
              <li className="google">
                <a href="#">
                  <i className="fa fa-google fa-2x" aria-hidden="true"></i>
                </a>
              </li>
              <li className="whatsapp">
                <a href="#">
                  <i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </Nav>
        </Container>
      </section>
    </div>
  )
}
