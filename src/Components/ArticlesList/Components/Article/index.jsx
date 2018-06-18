import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shave from 'shave';
import './index.scss';

class Article extends Component {

  static propTypes = {
      title: PropTypes.string,
      text: PropTypes.string,
      comments: PropTypes.array,
  };

  constructor(props) {
      super(props);
      this.state =  {
          isArticleShown: false,
          isArticleDisplayed: true,
          isModalShown: false,
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

  shaveText = () => {
      if(this.text) {
          const maxHeight = parseInt(window.getComputedStyle(this.text).getPropertyValue('line-height')) * 2;
          shave(this.text, this.state.isArticleShown ? Infinity : maxHeight);
      }
  }

  showModal = () => {
      this.setState({isModalShown: true});
  }

  closeModal = () => {
      this.setState({isModalShown: false});
  }

  removeArticle = () => {
      this.setState({isArticleDisplayed: false});
      this.closeModal();
  }

  render() {
      return (
          <div className="article-hoc">
              {
                  this.state.isArticleDisplayed ?
                  <div className="article">
                      <h3 className="article__title">{this.props.title}
                          <button onClick={() => this.toggleArticleShaving()}>
                              {this.state.isArticleShown ? 'shave article' : 'show all article'}
                          </button>
                          <button onClick={this.props.showModal}>
                              remove article
                          </button>
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
                                  : null }
                          </div>
                      </div>
                  </div> : null
              }

              {/*<Modal*/}
                  {/*isOpen={this.state.isModalShown}*/}
                  {/*style={customStyles}*/}
                  {/*contentLabel="Example Modal"*/}
              {/*>*/}

                  {/*<h2>Are you sure you want to remove this article?</h2>*/}
                  {/*<div className="modal__actions">*/}
                      {/*<button onClick={this.closeModal}>Close</button>*/}
                      {/*<button onClick={this.removeArticle}>Yes, remove it</button>*/}
                  {/*</div>*/}
              {/*</Modal>*/}
          </div>

      );
  }
}

export default Article;
