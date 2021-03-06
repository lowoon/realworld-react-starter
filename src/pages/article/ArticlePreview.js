import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function ArticlePreview({ article }) {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to="/profile"><img src={article.author.image}/></Link>
        <div className="info">
          <Link to="/profile/:username" className="author">{article.author.username}</Link>
          <span className="date">{moment(article.createdAt).format('MMMM Do')}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"/>{article.favoritesCount}
        </button>
      </div>
      <Link to="/article" className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
      </Link>
    </div>
  );
}

export default ArticlePreview;