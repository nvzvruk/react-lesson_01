import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shave from 'shave';
import './index.scss';

class Article extends Component {

  static propTypes = {
      title: PropTypes.string,
      text: PropTypes.string,
      comments: PropTypes.array,
      showModal: PropTypes.func,
      isRemoveButtonShown: PropTypes.bool
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
          <div className="article-hoc">
              <div className="article">
                  <h3 className="article__title">{this.props.title}
                      <button onClick={() => this.toggleArticleShaving()}>
                          {this.state.isArticleShown ? 'shave article' : 'show all article'}
                      </button>
                      {this.props.isRemoveButtonShown ?
                          <button onClick={this.props.showModal}>
                              remove article
                          </button>
                          : null
                      }
                  </h3>
                  <div className="article-content">
                      <p ref={ref => this.text = ref} className="article__text">{this.props.text}</p>
                      <div className="comments">
                          <h4 className="comments__title">comments ({this.props.comments.length})
                              <button onClick={() => this.toggleCommentsVisibility()}>
                                  {this.state.isCommentsShown ? 'hide comments' : 'show comments'}
                              </button>
                          </h4>
                          { this.state.isCommentsShown ?
                              <div className="comments-box">{this.props.comments.map((comment, index) =>
                                  <p className="comments__item" key={index}>{comment}</p>)}
                              </div>
                              : null
                          }
                      </div>
                  </div>
              </div>
          </div>
      );
  }
}

export default Article;
