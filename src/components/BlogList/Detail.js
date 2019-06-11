import React from 'react';
import PropTypes from 'prop-types';
import style from './detail.module.css';
var classNames = require('classnames');

const BlogDetail = props => {
	return (
		<div className={classNames('panel-body', style.panel_body)}>
			<div className="row">
				<div className="col-md-2 col-sm-3 text-center">
					<a className="story-img" href="#" />
				</div>
				<div className="col-md-9 col-sm-8">
					<h3>Post Entry Title</h3>
					<div className="row">
						<div className="col-xs-9">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Duis pharetra varius quam sit
								amet vulputate. Quisque mauris augue, molestie
								tincidunt condimentum vitae, gravida a libero.
								Aenean sit amet felis dolor, in sagittis nisi.
								Sed ac orci quis tortor imperdiet venenatis.
								Duis elementum auctor accumsan. Aliquam in felis
								sit amet augue.
							</p>
							<p className="lead">
								<button className="btn btn-default">
									Read More
								</button>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogDetail;
