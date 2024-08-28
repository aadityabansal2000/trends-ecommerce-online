import React from 'react'
import logo from './constants/logo.png';
import sun from './constants/sun.png';
import moon from './constants/moon.png';
import man from './constants/man.png';
import Badge from 'react-bootstrap/Badge';
import { Link, useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import { useCartContext } from '../context/cart_context';

function Navbar() {
  const {cart} = useCartContext();
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const navigate = useNavigate();
  function changeTheme() {
    var icon = document.getElementById("icon");
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {

      icon.src = sun;
    }
    else {

      icon.src = moon;
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light shadow-lg p-3 mb-5 navstyle">
        <div className="container-fluid">
          <img src={logo} alt="Logo" style={{ width: "80px", height: "35px", cursor: 'pointer' }} onClick={() => { navigate('/') }} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <li className="nav-item">
                <Link className="nav-link active text-white " style={{ marginLeft: "15px" }} aria-current="psage" to="/">Home</Link>
              </li>

              {isAuthenticated ?
                (
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/shop" style={{ marginLeft: "15px" }}>Shop</Link>
                  </li>
                ) : (<li></li>)
              }
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact" style={{ marginLeft: "15px" }}>Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about" style={{ marginLeft: "15px" }}>About</Link>
              </li>
            </ul>
            <div className='d-flex' >

              {isAuthenticated && <div style={{ display: "flex" }}>
             
              <Link to="/cart"><span className="material-symbols-outlined" style={{ marginTop: "5px",color:"white" }}>shopping_cart</span></Link>
              <sub style={{left:"-8px",bottom:"0.25px"}}> <Badge pill bg="danger">{cart.length}</Badge></sub>
                <img src={man} alt="user" style={{ height: "30px", width: "50px", marginTop: "2px" }} />
                <h5 style={{ marginTop: "5px" }} >{user.name}</h5></div>}
              {isAuthenticated ? (

                <Link className="btn btn-outline-success mx-1" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</Link>
              ) :
                (
                  <Link className="btn btn-outline-success mx-1" onClick={() => loginWithRedirect()}>Login</Link>
                )
              }

              <img src={moon} alt="sun" id="icon" onClick={changeTheme} />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;