import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
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
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLinks"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLinks"
              >
                About
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLinks"
              >
                Services
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLinks"
              >
                Contact
              </a>
            </li>
          </ul>
          <div id="navBtn">
            <div id="homeContactSocialLink">
              <i class="bx bxl-facebook"></i>
              <i class="bx bxl-instagram"></i>
              <i class="bx bxl-whatsapp"></i>
            </div>
            <button type="submit">Contact Us</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
