import React, { Component } from 'react';
import './index.scss';

class ArticleList extends Component {

    render() {
        return (
                <div className="article-list">
                    {this.props.children}
                </div>
        );
    }
}

export default ArticleList;
