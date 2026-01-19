const ArticleList = ({ articles }) => (
  <ul className="news-list">
    {articles.map(({ objectID, title, url }) => (
      <li key={objectID} className="news-item">
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          className="news-link"
        >
          {title}
        </a>
      </li>
    ))}
  </ul>
);

export default ArticleList;
