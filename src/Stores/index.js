import { createStore } from 'redux';
import ARTICLES_CONTENT from './../constants/ARTICLES_CONTENT';
// import rootReducer from './reducer';

const initialState = ARTICLES_CONTENT;

let article = (state = initialState, action) => {
    if (action.type === 'ADD_ARTICLE') {
        return [
            ...state,
            action.payload
        ]
    }

    if (action.type === 'DELETE_ARTICLE') {
        return state.filter(article => article.id !== action.payload.id)
    }

    return state;
};

const store = createStore(
    article
);

export default store;