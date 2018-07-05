import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shave from 'shave';
import './index.scss';

class Article extends Component {

  static propTypes = {
      id: PropTypes.number,
      title: PropTypes.string,
      text: PropTypes.string,
      comments: PropTypes.array,
      showModal: PropTypes.func,
      isRemoveButtonShown: PropTypes.bool,
      removeArticle: PropTypes.func,
      removeComment: PropTypes.func
  };

  constructor(props) {
      super(props);
      this.state =  {
          isArticleShown: false,
          isCommentsShown: false
      };

      this.text = null;
  }

  toggleCommentsVisibility = () => {
      this.setState({
          isCommentsShown: !this.state.isCommentsShown
      })
  };

  toggleArticleShaving () {
      if(this.state.isCommentsShown) {
        this.toggleCommentsVisibility();
      }

      this.setState({isArticleShown: !this.state.isArticleShown}, () => {
          this.shaveText();
      });
  }

  componentDidMount() {
      this.shaveText()
  }

  componentDidUpdate() {
      this.shaveText()
  }

  shaveText = () => {
      if(this.text) {
          const maxHeight = parseInt(window.getComputedStyle(this.text).getPropertyValue('line-height'), 10) * 2;
          shave(this.text, this.state.isArticleShown ? Infinity : maxHeight);
      }
  }

  render() {
      return (
              <div className="article">
                  <h3 className="article__title">{this.props.title} - {this.props.id}
                      <button onClick={() => this.toggleArticleShaving()}>
                          {this.state.isArticleShown ? 'shave article' : 'show all article'}
                      </button>

                      <button onClick={() => this.props.removeArticle(this.props.id)}>
                          Delete Article
                      </button>
                  </h3>
                  <div className="article-content">
                      <p ref={ref => this.text = ref} className="article__text">{this.props.text}</p>
                      <div className="comments">
                          <h4 className="comments__title">comments
                              <button onClick={() => this.toggleCommentsVisibility()}>
                                  {this.state.isCommentsShown ? 'hide comments' : 'show comments'}
                              </button>
                          </h4>
                          { this.state.isCommentsShown ?
                              <div className="comments-box">{this.props.comments.map((comment, index) =>
                                  <div className="comments__item" key={index}>
                                    <p className="text">{comment.text} - {comment.id}</p>
                                    <button onClick={() => this.props.removeComment(this.props.id, comment.id)}>remove comment</button>
                                  </div>)}
                              </div>
                              : null
                          }
                      </div>
                  </div>
              </div>
      );
  }
}

export default Article;
