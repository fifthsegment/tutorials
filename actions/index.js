import Rx from 'rx';
import axios from 'axios';

export const requestPosts = (category) => {
	return {
    	type: "REQUEST_POSTS",
    	payload: {
    		category:category,
    		posts: [],
    		fetching:true,
    	}
  	}
}


export const receivePosts = (category , json) => {
  return {
    type: 'RECEIVE_POSTS',
    payload: {
    	category: category,
    	posts: json.data,
    	receivedAt: Date.now(),
    	fetching:false,
    }
  }
}

export const errorgettingPosts = ( error ) => {
  return {
    type: 'ERROR_GETTING_POSTS',
    payload: {

    	error: error,
    }
  }
}


export const fetchPosts = ( category ) => {
	return function (dispatch, getState) {

		dispatch(requestPosts(category));
        let rand = Math.random();

		var url = 'https://jsonplaceholder.typicode.com/posts';
		if ( rand > 0.5 ){
			url = 'https://reddit.com/r/front.json';
		}
		axios.defaults.baseURL = url;
		function getItems() {
		  return Rx.Observable.fromPromise(axios.get(''));
		}

		getItems()
		  .subscribe((res) => {
		  	dispatch(receivePosts(category, res));
		}, (err) => {
			dispatch(errorgettingPosts(err));
		});
	}
	
}