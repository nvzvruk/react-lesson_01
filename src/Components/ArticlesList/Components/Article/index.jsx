import React, { Component } from 'react';
import './index.scss';

class Article extends Component {

  constructor() {
    super();
    this.state =  {
      isArticleShown: false,
      isCommentsShown: false
    }
  }

  toggleArticleVisibility = () => {
    if(this.state.isCommentsShown) {
      this.toggleCommentsVisibility();
    }

    this.setState({
      isArticleShown: !this.state.isArticleShown
    })
  }

  toggleCommentsVisibility = () => {
    this.setState({
      isCommentsShown: !this.state.isCommentsShown
    })
  }

  render() {
    return (
      <div className="article">
        <h3 className="article__title">{this.props.title}
        <button
          onClick={() => this.toggleArticleVisibility()}>
            {this.state.isArticleShown ? 'hide article' : 'show article'}
          </button>
        </h3>
        {
          this.state.isArticleShown ?
          <div className="article-content">
          <p className="article__text">
            {this.props.text}
          </p>

          <div className="comments">
            <h4 className="comments__title">
              comments ({this.props.comments.length})
              <button onClick={() => this.toggleCommentsVisibility()}>
                {this.state.isCommentsShown ? 'hide comments' : 'show comments'}
              </button>
            </h4>
            {
              this.state.isCommentsShown ?
              <div className="comments-box">
                {this.props.comments.map(comment =>
                <p className="comments__item">
                  {comment}
                </p>)}
              </div>: null
            }

          </div>

          </div>
          : null
        }
      </div>
    );
  }
}

export default Article;
