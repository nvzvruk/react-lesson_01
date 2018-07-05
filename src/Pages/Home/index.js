import React, { Component } from 'react';
import ArticlesList from '../../Components/ArticlesList/index';
import './index.scss';

class Home extends Component {

    render() {
        return (
            <div className="home-page">
                <ArticlesList articles={this.props.articles}/>

            </div>
        );
    }
}

export default Home