import axios from 'axios';
import { setArticles } from './actions';

export const getArticles = () => dispatch => {
    axios.get("https://newsapi.org/v2/everything?sources=bbc-news&language=en&apiKey=ca25262e88be470a8c99de31b2b45cc7").then(response => {
	    	const articles = response.data.articles;
	        dispatch(setArticles(articles));
    });
};