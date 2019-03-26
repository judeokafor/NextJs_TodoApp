import React, { Component } from "react";
import Link from "next/link";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-md mb-4"
          style={navbarBg}
        >
          <div className="container">
            <a className="navbar-brand text-primary" href="#">
              Next React Todo
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link text-primary">Home</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about">
                    <a className="nav-link text-primary">About Us</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
const navbarBg = {
    backgroundColor: '#f0f0f0',
}

export default Navbar;
