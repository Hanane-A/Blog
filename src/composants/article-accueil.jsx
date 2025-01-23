import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Articles_Accueil extends React.Component {
  render() {
    return (
      <div className="col-sm-5 article">
        <img src={this.props.image} />
        <h3>{this.props.titre}</h3>
        <p>{this.props.contenu}</p>
        <button>
          <Link to={`/ArticleEl/${this.props.id}`}>Lire</Link>
        </button>
      </div>
    );
  }
}

Articles_Accueil.propTypes = {
  image: PropTypes.string.isRequired,
  titre: PropTypes.string.isRequired,
  contenu: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Articles_Accueil;
