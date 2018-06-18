import React, { Component } from 'react';
import Article from './Components/Article';
import ARTICLES_CONTENT from './../../constants/ARTICLES_CONTENT';
import './index.scss';
import Modal from 'react-modal';

const customStyles = {
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class ArticleList extends Component {

    state = {
        articles: [],
        isModalShown: false,
        articleToRemove: null
    }

    showModal = (index) => {
        this.setState({articleToRemove: index});
        this.setState({isModalShown: true});
    }

    closeModal = () => {
        this.setState({isModalShown: false});
    }

    removeArticle = () => {
        let updatedArticles = this.state.articles.filter((article, index) => {
            return index !== this.state.articleToRemove;
        })

        this.setState({articles: updatedArticles});
        this.closeModal();
    }

    componentDidMount() {
        this.setState({articles: ARTICLES_CONTENT})
    }

    render() {
        return (
            <div className="article-list">
            {this.state.articles.map((item, index) =>
                <Article title={item.title} text={item.text} comments={item.comments} key={index}
                         showModal={() => this.showModal(index)}/>)
            }
            <Modal
                isOpen={this.state.isModalShown}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2>Are you sure you want to remove this article?</h2>
                <div className="modal__actions">
                    <button onClick={this.closeModal}>Close</button>
                    <button onClick={this.removeArticle}>Yes, remove it</button>
                </div>
            </Modal>
        </div>);
    }
}

export default ArticleList;
