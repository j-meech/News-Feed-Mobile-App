const setArticles = (state, { articles }) => {
	const newState = {
		...state,
		articles: articles,
	}
	return newState;
};

const reducer = (state, action) => {
    switch (action.type) {
    	case "setArticles": return setArticles(state, action);
        default: return state;
    }
};

export default reducer;