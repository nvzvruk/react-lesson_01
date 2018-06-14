import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class Article extends Component {

  static propTypes = {
      title: PropTypes.string,
      text: PropTypes.string,
      comments: PropTypes.array
  }

  constructor() {
    super();
    this.state =  {
      isArticleShown: false,
      isCommentsShown: false
    }

    this.text = null;
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

  componentDidMount() {
    console.log(this.text)
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
          <div className="article-content">
          <p ref={ref => this.text = ref} className="article__text">
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
      </div>
    );
  }
}

export default Article;
