import React, { Component } from 'react';
import Article from './Components/Article'
import store from './../../Stores'
import './index.scss';

class ArticleList extends Component {

    removeArticle = (id) => {
        store.dispatch({type: 'DELETE_ARTICLE', payload: {
            id: id,
        }})
    }

    removeComment = (articleId, commentId) => {
        store.dispatch({type: 'DELETE_COMMENT', payload: {
            articleId: articleId,
            commentId: commentId
        }})
    }

    render() {
        return (
                <div className="article-list">
                    {this.props.articles.map((item, index) =>
                        <Article key={index}
                                 title={item.title}
                                 text={item.text}
                                 comments={item.comments}
                                 id={item.id}
                                 removeArticle={(id) => this.removeArticle(id)}
                                 removeComment={(articleId, commentId) => this.removeComment(articleId, commentId)}
                        />)}
                </div>
        );
    }
}

export default ArticleList;
