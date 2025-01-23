import React from "react";
import { Link } from "react-router-dom";

class ContenAccueil extends React.Component {
  render() {
    return (
      <div id="content-accueil" className="contener">
        <div className="presentation">
          <h1 className="title">Blog</h1>
          <p className="description">
            Suivez moi dans un univers de développement logiciel
          </p>
          <button className="cta-button">
            <Link to="/Articles">Découvrir</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default ContenAccueil;
