import React, { Component } from 'react';
import Article from './Components/Article';
import ARTICLES_CONTENT from './../../constants/ARTICLES_CONTENT';
import './index.scss';
import Modal from 'react-modal';

const customStyles = {
    content : {
        top: '20%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translateX(-50%)'
    }
};

Modal.setAppElement('#root');

const ArticleListContext = React.createContext();

class MyProvider extends Component {

    state = {
        isRemoveButtonShown: true
    };

    toggleRemovePossibility = () => {
        this.setState({isRemoveButtonShown: !this.state.isRemoveButtonShown})
    };

    render() {

        return(
            <ArticleListContext.Provider value={{isRemoveButtonShown: this.state.isRemoveButtonShown}}>
                <button onClick={this.toggleRemovePossibility}>Toggle Remove Possibility</button>
                {this.props.children}
            </ArticleListContext.Provider>
        );
    }
}


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
            <MyProvider>
                <div className="article-list">
                    {this.state.articles.map((item, index) =>
                        <ArticleListContext.Consumer key={index}>
                            {(context) => (<Article title={item.title}
                                                    text={item.text}
                                                    comments={item.comments}
                                                    showModal={() => this.showModal(index)}
                                                    isRemoveButtonShown={context.isRemoveButtonShown}/>)}
                        </ArticleListContext.Consumer>
                    )}
                    <Modal
                        isOpen={this.state.isModalShown}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <h4>Are you sure you want to delete this article</h4>
                        <div className="modal__actions">
                            <button onClick={this.closeModal}>Close</button>
                            <button onClick={this.removeArticle}>Yes, remove it</button>
                        </div>
                    </Modal>
                </div>
            </MyProvider>
        );
    }
}

export default ArticleList;
