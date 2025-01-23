import React from "react";
import Articles_Accueil from "../article-accueil";

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          id: 1,
          image: "/back-end.jpg",
          titre: "Qu'est ce qu'un dev backEnd",
          contenu:
            "Le développeur back-end a pour mission de concevoir tous les éléments techniques indispensables au fonctionnement d'un site web ou d'une application. Il doit donc avoir des connaissances",
          contenueIntegrale: `
                <div class="article-container" style="max-width: 800px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #fff;">
                  <h1 style="text-align: center; color: #333; font-size: 2.5em; margin-bottom: 20px;">Le développement back-end</h1>
                  <img src="/back-end.jpg" style="width: 90%; height: auto"/>
                  <p style="margin-bottom: 20px; color: #555;">Le développement back-end est une composante essentielle du développement web, se concentrant sur la gestion des bases de données, la logique métier et la communication entre le serveur et le client. Les développeurs back-end créent et maintiennent les technologies qui alimentent les composants front-end, assurant ainsi que l'application fonctionne correctement et efficacement.</p>
                  <p class="section-title" style="font-size: 1.5em; margin-top: 30px; color: #333;">Les langages de programmation back-end</p>
                  <p style="margin-bottom: 20px; color: #555;">Il existe plusieurs langages de programmation couramment utilisés pour le développement back-end :</p>
                  <ul style="margin: 20px 0; padding: 0; list-style-type: disc; padding-left: 20px; color: #555;">
                      <li style="margin-bottom: 10px;"><span class="highlight" style="color: #007bff; font-weight: bold;">Python</span> : Connu pour sa simplicité et sa lisibilité, Python est utilisé avec des frameworks comme Django et Flask.</li>
                      <li style="margin-bottom: 10px;"><span class="highlight" style="color: #007bff; font-weight: bold;">JavaScript (Node.js)</span> : Utilisé principalement pour les applications en temps réel et les API, Node.js permet d'utiliser JavaScript côté serveur.</li>
                      <li style="margin-bottom: 10px;"><span class="highlight" style="color: #007bff; font-weight: bold;">Java</span> : Utilisé dans les grandes entreprises pour sa robustesse et sa sécurité, souvent avec le framework Spring.</li>
                      <li style="margin-bottom: 10px;"><span class="highlight" style="color: #007bff; font-weight: bold;">Ruby</span> : Utilisé avec le framework Ruby on Rails, connu pour sa rapidité de développement et sa convivialité.</li>
                      <li style="margin-bottom: 10px;"><span class="highlight" style="color: #007bff; font-weight: bold;">PHP</span> : Utilisé pour le développement web avec des systèmes de gestion de contenu (CMS) comme WordPress et des frameworks comme Laravel.</li>
                  </ul>
                  <p class="section-title" style="font-size: 1.5em; margin-top: 30px; color: #333;">Les bases de données</p>
                  <p style="margin-bottom: 20px; color: #555;">Les bases de données sont essentielles pour stocker et gérer les données des applications web. Les développeurs back-end travaillent souvent avec :</p>
                  <ul style="margin: 20px 0; padding: 0; list-style-type: disc; padding-left: 20px; color: #555;">
                      <li style="margin-bottom: 10px;"><span class="highlight" style="[_{{{CITATION{{{_1{](https://github.com/NicoLarson/exercice_php/tree/751d31e78d5fbfe9852f5be20c6ce41a955051d7/readme.md)[_{{{CITATION{{{_2{](https://github.com/js202005082300/Aide-m-moires/tree/c85c562d508c68fa086972462338ed773a25c8ac/JavaScript%2Fcours%2F002_hello_world%2Fnote.md)},`,
        },
        {
          id: 2,
          image: "/fullstack.jpg",
          titre: "Qu'est ce qu'un dev full stack",
          contenu:
            "Le développeur full stack est un développeur touche-à-tout et complet, qui travaille à la fois côté Backend et Frontend. Par définition, être « full stack » signifie travailler sur « toute la stack ».",
          contenueIntegrale: `
                    <div class="article-container" style="max-width: 800px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #fff;">
                        <h1 style="text-align: center; color: #333; font-size: 2.5em; margin-bottom: 20px;">Qu'est ce qu'un dev full stack</h1>
                        <img src="/fullstack.jpg" style="width: 90%; height: auto"/>
                        <p style="margin-bottom: 20px; color: #555;">Un développeur full stack est un professionnel du développement logiciel capable de travailler aussi bien sur les aspects front-end (côté client) que sur les aspects back-end (côté serveur) d'une application. Cette polyvalence en fait un atout précieux pour les entreprises qui cherchent à maximiser l'efficacité et la cohérence de leurs projets technologiques.</p>
                        
                        <p class="section-title" style="font-size: 1.5em; margin-top: 30px; color: #333;">Le développement front-end</p>
                        <p style="margin-bottom: 20px; color: #555;">La partie <span class="highlight" style="color: #007bff; font-weight: bold;">front-end</span> concerne tout ce que l'utilisateur voit et avec quoi il interagit directement, comme le design, les boutons, les formulaires et les interfaces utilisateur en général. Les technologies couramment utilisées pour le développement front-end incluent :</p>
                        <ul style="margin: 20px 0; padding: 0; list-style-type: disc; padding-left: 20px; color: #555;">
                            <li style="margin-bottom: 10px;"><span class="highlight" style="color: #007bff; font-weight: bold;">HTML</span> : le langage de balisage standard utilisé pour créer la structure des pages web.</li>
                            <li style="margin-bottom: 10px;"><span class="highlight" style="color: #007bff; font-weight: bold;">CSS</span> : un langage de style utilisé pour décrire la présentation d'un document HTML.</li>
                            <li style="margin-bottom: 10px;"><span class="highlight" style="color: #007bff; font-weight: bold;">JavaScript</span> : un langage de programmation qui permet de créer des contenus interactifs sur les pages web.</li>
                            <li style="margin-bottom: 10px;">Des frameworks tels que <span class="highlight" style="color: #007bff; font-weight: bold;">React</span>, <span class="highlight" style="color: #007bff; font-weight: bold;">Angular</span> et <span class="highlight" style="color: #007bff; font-weight: bold;">Vue.js</span>.</li>
                        </ul>
                        
                        <p class="section-title" style="font-size: 1.5em; margin-top: 30px; color: #333;">Le développement back-end</p>
                        <p style="margin-bottom: 20px; color: #555;">La partie <span class="highlight" style="color: #007bff; font-weight: bold;">back-end</span> se concentre sur ce qui se passe côté serveur, comme la gestion des bases de données, l'authentification des utilisateurs, la logique métier, et les API. Les langages de programmation souvent employés pour le développement back-end sont :</p>
                        <ul style="margin: 20px 0; padding: 0; list-style-type: disc; padding-left: 20px; color: #555;">
                            <li style="margin-bottom: 10px;"><span class="highlight" style="color: #007bff; font-weight: bold;">Python</span></li>
                            <li style="margin-bottom: 10px;"><span class="highlight" style="color: #007bff; font-weight: bold;">Java</span></li>
                            <li style="margin-bottom: 10px;"><span class="highlight" style="color: #007bff; font-weight: bold;">Ruby</span></li>
                            <li style="margin-bottom: 10px;"><span class="highlight" style="color: #007bff; font-weight: bold;">PHP</span></li>
                            <li style="margin-bottom: 10px;"><span class="highlight" style="color: #007bff; font-weight: bold;">Node.js</span></li>
                        </ul>
                        <p style="margin-bottom: 20px; color: #555;">Les frameworks comme <span class="highlight" style="color: #007bff; font-weight: bold;">Django</span>, <span class="highlight" style="color: #007bff; font-weight: bold;">Spring</span>, <span class="highlight" style="color: #007bff; font-weight: bold;">Ruby on Rails</span>, et <span class="highlight" style="color: #007bff; font-weight: bold;">Express.js</span> sont également très utilisés.</p>
                        
                        <p class="section-title" style="font-size: 1.5em; margin-top: 30px; color: #333;">Les compétences nécessaires</p>
                        <p style="margin-bottom: 20px; color: #555;">Être un développeur full stack nécessite une connaissance approfondie et étendue de plusieurs technologies et outils. Cela inclut non seulement la maîtrise des langages et des frameworks mentionnés ci-dessus, mais aussi une compréhension des bases de données (SQL et NoSQL), du déploiement d'applications, et parfois même de la gestion de l'infrastructure avec des outils comme <span class="highlight" style="color: #007bff; font-weight: bold;">Docker</span> et <span class="highlight" style="color: #007bff; font-weight: bold;">Kubernetes</span>.</p>
                        
                        <p class="section-title" style="font-size: 1.5em; margin-top: 30px; color: #333;">Conclusion</p>
                        <p style="margin-bottom: 20px; color: #555;">En résumé, un <span class="highlight" style="color: #007bff; font-weight: bold;">développeur full stack</span> est un développeur touche-à-tout et complet, capable de gérer un projet de développement de bout en bout. Cette compétence polyvalente permet non seulement de gagner du temps et des ressources, mais aussi d'assurer une meilleure intégration et une plus grande fluidité entre les différentes parties d'une application.</p>
                        
                        <p style="margin-bottom: 20px; color: #555;">Pour ceux qui aspirent à devenir développeurs full stack, il est recommandé de commencer par se spécialiser soit en front-end soit en back-end avant de progressivement acquérir des compétences dans l'autre domaine. Cela permet de bien solidifier les bases avant de se diversifier.</p>
                    </div>`,
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
              <span>Articles</span>
            </div>
            <div className="div-aside col-md contener">
              <div className="row">
                {this.state.articles.map((article) => (
                  <Articles_Accueil
                    key={article.id}
                    image={article.image}
                    titre={article.titre}
                    contenu={article.contenu}
                    id={article.id}
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

export default Articles;
