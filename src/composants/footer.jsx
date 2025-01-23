import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="content">
        <div className="row">
          <div className="resau col-sm">
            <img src="/blog-logo.png" alt="logo" className="logo" />
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/hanane-adeleke-798340271/">
                  linkedin
                </a>
              </li>
              <li>
                <a href="https://github.com/Hanane-A">github</a>
              </li>
              <li>
                <a href="mailto:adeleke.hanan@gmail.com">Mail</a>
              </li>
            </ul>
          </div>
          <div className="categorie col-md">
            <h5>Categories</h5>
            <ul>
              <li>FrontEnd</li>
              <li>BackEnd</li>
            </ul>
          </div>
          <div className="info col-md">
            <h5>Info</h5>
            <p>
              je suis un etudiant en informatique visant à devenir Dev Full
              Stack
              <br />© 2024-2025 Hanane ADELEKE. Tous droits réservés
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
