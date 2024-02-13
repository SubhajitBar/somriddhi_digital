import React from "react";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className=" ">
      <nav className="navbar navbar-expand-lg bg-white flex-column">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/images/logo.png" />
          </a>
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
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <div className="d-flex form-group has-search">
              <span className="form-control-feedback">
                <IoSearch />
              </span>
              <input
                type="text"
                className="form-control bg-light"
                placeholder="Search For brand, category, coupon"
              />
              <button className="btn search-btn text-white" type="submit">
                LOGIN/SIGNUP
              </button>
            </div>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg bg-dark justify-content-center">
        <div className="d-flex bg-dark justify-content-center" id="">
          <ul className="navbar-nav flex-row gap-2">
            <li className="nav-item">
              <a
                className="nav-link text-white active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Deals
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Coupon
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white disabled" aria-disabled="true">
                Stores
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white disabled" aria-disabled="true">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
