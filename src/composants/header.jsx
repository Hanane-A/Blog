import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand" to="/">
              <img src="/blog-logo.png" alt="logo" className="logo" />
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/Articles"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Articles
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technologies">
                    Technologies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/a-propos">
                    A propos
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
