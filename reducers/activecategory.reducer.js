
export default ( state = null , action ) => {
	switch(action.type){
		case "RECEIVE_POSTS":
			return action.payload;
			break;
		case "REQUEST_POSTS":
			return action.payload;
			break;
		case "ERROR_GETTING_POSTS":
			return action.payload;
			break;
	}
	return state; 
}
