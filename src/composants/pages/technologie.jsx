import React from "react";
import ContentTecnologies from "../tech-content";
class Tecnologies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          id: "1",
          image: "/python.png",
          titre: "Python",
          lien: "https://www.python.org/",
          contenu:
            "Connu pour sa simplicité et sa lisibilité, Python est utilisé dans divers domaines comme le développement web, l'analyse de données et l'intelligence artificielle.",
        },
        {
          id: "2",
          image: "/node.jpg",
          titre: "JavaScript (Node.js)",
          lien: "https://nodejs.org/en/",
          contenu:
            "Utilisé principalement pour les applications en temps réel et les API, Node.jspermet d'utiliser JavaScript côté serveur.",
        },
        {
          id: "3",
          image: "/java.jpg",
          titre: "Java",
          lien: "https://www.oracle.com/java/",
          contenu:
            "Utilisé dans les grandes entreprises pour sa robustesse et sa sécurité, souvent avec le framework Spring.",
        },
        {
          id: "4",
          image: "/ruby.png",
          titre: "Ruby",
          lien: "https://www.ruby-lang.org/en/",
          contenu:
            "Utilisé avec le framework Ruby on Rails, connu pour sa rapidité de développement et sa convivialité.",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <div className=" contener Articles-div">
          <div className="row">
            <div id="Aside" className="col-md-3">
              <span>Full Stack Devs</span>
              <a
                href="https://fr.wikipedia.org/wiki/D%C3%A9veloppeur_full_stack"
                id="btn-Tech"
              >
                <button>Découvrir</button>
              </a>
            </div>
            <div className="div-aside col-md contener">
              <div className="row">
                {this.state.articles.map((article) => (
                  <ContentTecnologies
                    key={article.id}
                    image={article.image}
                    titre={article.titre}
                    contenu={article.contenu}
                    id={article.id}
                    lien={article.lien}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tecnologies;
