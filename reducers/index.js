import {combineReducers} from 'redux';
import categoryReducer from './categories.reducer.js';
import activecategoryReducer from './activecategory.reducer.js';

const allReducers = combineReducers({
	categories: categoryReducer,
	activecategory: activecategoryReducer,
});

export default allReducers;