import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import {Card, Button, DescriptionList} from '@shopify/polaris';

 class CategoryList extends Component{
 	createListItems(){
 		let items = this.props.categories.map((category) => (
 				{
 					term: category.name,
 					description: <Button onClick={() => this.props.fetchPosts(category)}>Load Posts</Button>,
 				}
 			)
 		)
 		return items;
 	}
	render(){
		return (<Card title="Load Posts from API" sectioned>
			      <DescriptionList items = {this.createListItems()} />
			    </Card>
		);
	}
}

function mapStateToProps(state){
	return {
		categories:state.categories,
		// activecategory:state.activecategory
	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({fetchPosts:fetchPosts},dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CategoryList);