import React from 'react';
import {Page,Card} from '@shopify/polaris';
require('../../scss/style.scss');
import CategoryList from '../containers/categorylist.js'
import ActiveCategory from '../containers/activecategory.js'

export default class App extends React.Component{

	render(){
		return 	<div>
			<Page title="Example Async app with Redux">
				<Card title="About this app" sectioned>
				<p>
					This little app demonstrates how to load data from an API while using 
					React-Redux while handling errors and maintaining states. Every time you 
					click the Load Posts button, this app makes a call either to <u>https://www.reddit.com</u> OR 
					to <u>https://jsonplaceholder.typicode.com/</u> to load a bunch of posts. <strong>Every click has a 50%
					chance of hitting either Reddit (produces an error) or Typicode API (loads succesfully)</strong>. If it hits the Typicode API, then this 
					app succesfully loads the posts, else it errors out by displaying a message.
					Since Reddit.com doesn't allow cross-origin requests. 

				</p>
				</Card>
				<CategoryList />
					<br/>
				<ActiveCategory />
			</Page>
		</div>
	}


	
}


// export default App;