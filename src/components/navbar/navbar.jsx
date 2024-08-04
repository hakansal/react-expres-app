import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">To do</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link  " aria-current="page" to="/todo">Todo</Link>
              </li>
            <li className="nav-item  ">
                <Link className="nav-link" to="/giris">Giriş</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/kayit">Kayıt</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  " aria-current="page" to="/cikis">Çıkış</Link>
              </li>
            <li className="nav-item">
                <Link className="nav-link  " aria-current="page" to="/home">Home</Link>
              </li>
 
              <li className="nav-item">
                <Link className="nav-link  " aria-current="page" to="/hakk">hakkımızda</Link>
              </li>
               
            </ul>
       
             
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
