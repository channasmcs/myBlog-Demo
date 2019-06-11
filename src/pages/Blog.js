import React, { Component } from 'react';
import axios from 'axios';
import BlogList from '../components/BlogList/List';

class Blog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			blogData: {},
			isLoad: false,
		};
	}
	componentDidMount() {
		this.setState({ isLoad: true });
		axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
			this.setState({ blogData: res.data, isLoad: false });
		});
	}
	loadBlogData() {
		if (this.state.blogData.length > 0) {
			return <BlogList blogData={this.state.blogData} />;
		}
	}
	isLoading() {
		if (this.state.isLoad === true) {
			return 'Loading ...';
		}
	}
	render() {
		return (
			<div className="row">
				{this.isLoading()}
				<div className="col-lg-12">{this.loadBlogData()}</div>
			</div>
		);
	}
}

export default Blog;
