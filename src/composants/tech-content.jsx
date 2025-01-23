import React from "react";
import PropTypes from "prop-types";

class ContentTecnologies extends React.Component {
  render() {
    return (
      <div className="col-sm-5 article">
        <img src={this.props.image} />
        <h3>{this.props.titre}</h3>
        <p>{this.props.contenu}</p>
        <a href={this.props.lien}>
          <button>Découvrir</button>
        </a>
      </div>
    );
  }
}

ContentTecnologies.propTypes = {
  image: PropTypes.string.isRequired,
  titre: PropTypes.string.isRequired,
  contenu: PropTypes.string.isRequired,
  lien: PropTypes.string.isRequired,
};

export default ContentTecnologies;
