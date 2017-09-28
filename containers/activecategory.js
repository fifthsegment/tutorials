import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions';
import {Banner, EmptyState,Card, DescriptionList, TextStyle} from '@shopify/polaris';

 class ActiveCategory extends Component{
 	
	render(){
		let json = JSON.stringify(this.props.activecategory);
		let user = this.props.activecategory;
		if (!user){
			return <Card
			  	title="Nothing loaded yet!"
  					sectioned
				>
			  <p>Click the Load Posts button above to load something.</p>
			</Card>;
		}
		if (this.props.activecategory.fetching){
			return <div>Loading data</div>
		}
		if (this.props.activecategory.error){
			return <Banner
					  title="Simulated Error: Unable to Obtain data from the API"
					  status="critical"
					>
					  <p>Unable to obtain data from the API. Probably due to lack of CORS Headers.</p>
					</Banner>
		}
		let items = this.props.activecategory.posts.map((v)=>({term:v.title, description:v.body}));
		let title = `Loaded ${this.props.activecategory.posts.length} posts from the API`;
		return (<Card 
					title={title}
  					sectioned>
  						<DescriptionList
  							items={items}
  						/>
  				</Card>);
	}
}

function mapStateToProps(state){
	return {
		activecategory:state.activecategory
	}
}

export default connect(mapStateToProps)(ActiveCategory);