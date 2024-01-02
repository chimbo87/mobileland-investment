import React from "react";
import './Navbar.css';

function Navbar() {
  return (
    <div id="navigationBar">
      <div id="topNav">
        {" "}
        <div id="homeContactCard">
          <div id="homeContactCardInfor">
            <div id="homeContactCardIcon">
              <i class="bx bx-map"></i>
            </div>
            <div id="homeContactCardIText">
              <p>
                150 Mars Street{" "}Harare, Zimbabwe
              </p>
            </div>
          </div>
          <div id="homeContactCardInfor">
            <div id="homeContactCardIcon">
              <i class="bx bx-calendar"></i>
            </div>
            <div id="homeContactCardIText">
              <p>
                Mon ~ Sunday
              </p>
            </div>
          </div>
          <div id="homeContactCardInfor">
            <div id="homeContactCardIcon">
              <i class="bx bx-phone"></i>
            </div>
            <div id="homeContactCardIText">
              <p>
                +263 773 123 3456
              </p>
            </div>
          </div>
          <div id="homeContactCardInfor">
            <div id="homeContactCardIcon">
              <i class="bx bx-envelope"></i>
            </div>
            <div id="homeContactCardIText">
              <p>
                xiosa@info.com
              </p>
            </div>
          </div>
          {/* <div id="homeContactSocialLink">
            <i class="bx bxl-facebook"></i>
            <i class="bx bxl-instagram"></i>
            <i class="bx bxl-whatsapp"></i>
          </div> */}
        </div>
      </div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            MOBILELAND
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" id="navLinks">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" id="navLinks">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" id="navLinks">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" id="navLinks">
                  Contact
                </a>
              </li>
            </ul>
            <div id="navBtn">
              <button type="submit">Contact Us</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
