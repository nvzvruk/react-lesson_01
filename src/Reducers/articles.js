import ARTICLES_CONTENT from './../constants/ARTICLES_CONTENT';
const initialState = ARTICLES_CONTENT;

export function articles (state = initialState, action) {
    if (action.type === 'ADD_ARTICLE') {
        return [
            ...state,
            action.payload
        ]
    }

    if (action.type === 'DELETE_ARTICLE') {
        return state.filter(article => article.id !== action.payload.id)
    }

    if (action.type === 'DELETE_COMMENT') {

        return state.map(article => (
            article.id === action.payload.articleId ?
                {...article, comments : article.comments.filter(comment => comment.id !== action.payload.commentId)}
                : article
        ));
    }

    return state;
}