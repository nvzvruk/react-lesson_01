import React, { Component } from 'react';
import ArticlesList from './Components/ArticlesList';
import Article from './Components/ArticlesList/Components/Article';
import Form from './Components/Form';
import './index.scss';
import store from './Stores'
import { connect } from 'react-redux';


class App extends Component {

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
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">News Portal</h1>
                </header>
                <Form/>
                <ArticlesList>
                    {this.props.articles.map((item, index) =>
                        <Article key={index}
                                 title={item.title}
                                 text={item.text}
                                 comments={item.comments}
                                 id={item.id}
                                 removeArticle={(id) => this.removeArticle(id)}
                                 removeComment={(articleId, commentId) => this.removeComment(articleId, commentId)}
                        />)}
                </ArticlesList>
            </div>
        );
    }
}

export default connect(
    state => ({
        articles: state
    }),
    dispatch => ({})
)(App);
