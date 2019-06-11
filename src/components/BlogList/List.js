import React from 'react';
import PropTypes from 'prop-types';

import BlogDetail from './Detail';
import style from './detail.module.css';

var classNames = require('classnames');
const BlogList = props => {
	return (
		<div className={classNames('panel', style.panel)}>
			{props.blogData.map((blog, key) => (
				<BlogDetail blog={blog} key={key} />
			))}
		</div>
	);
};

BlogList.propTypes = {
	children: PropTypes.node,
};

export default BlogList;
