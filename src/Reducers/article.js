export let article = (state, action) => {
    if (action.type === 'ADD_ARTICLE') {
        return [
            ...state,
            action.payload
        ]
    }
    console.log(action);
    return state;
};