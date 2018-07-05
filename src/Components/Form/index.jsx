import React from 'react';
import './index.scss';
import store from './../../Stores'

class Form extends React.Component {

    addBtn = null;
    titleInput = null;
    textInput = null;

    componentDidMount() {
        this.addBtn.addEventListener('click', (e) => {
            e.preventDefault();
            let lastArticleId = store.getState().articles.length ?
                store.getState().articles[store.getState().articles.length - 1].id
                : 0;
            store.dispatch({type: 'ADD_ARTICLE', payload: {
                id: lastArticleId + 1,
                title: this.titleInput.value,
                text: this.textInput.value,
                date: new Date(),
                comments: [
                    {
                        id: 1,
                        text: 'Comment1'
                    },
                    {
                        id: 2,
                        text: 'Comment2'
                    },
                    {
                        id: 3,
                        text: 'Comment3'
                    },
                ]
            }})
        })
    }

    render() {
        return (
            <form className="form">
                <input
                    ref = {ref => this.titleInput = ref}
                    className="article__title"
                    type="text"/>
                <textarea
                    ref = {ref => this.textInput = ref}
                    className="article__text"
                    cols="30"
                    rows="2"/>
                <button
                    ref = {ref => this.addBtn = ref}
                    className="article__add">Add Article</button>
            </form>
        )
    }
}

export default Form;