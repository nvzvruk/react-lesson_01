import ARTICLES_CONTENT from './../constants/ARTICLES_CONTENT';

export let article = (state = ARTICLES_CONTENT, action) => {
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