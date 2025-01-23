import PropTypes from "prop-types";

import { useParams } from "react-router-dom";

const ArticleDetail = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find((elm) => elm.id == id);

  if (!article) {
    return <p>Article non trouvé.</p>;
  }

  return (
    <div
      className="article-detail"
      dangerouslySetInnerHTML={{ __html: article.contenueIntegrale }}
    ></div>
  );
};

ArticleDetail.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default ArticleDetail;
