import "./icon.scss";
import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({
		children,
		name,
		path,
		width,
		height,
		fill
}) => {

		const content = children || name;

		if (!(content || path)) {
				return null;
		}

		let url = path
				? path
				: '#' + content;
		url = url.trim();

		return (
				<svg fill={fill} width={width} height={height} className="icon">
						<use xlinkHref={url}/>
				</svg>
		);
};

Icon.propTypes = {
		children: PropTypes.string,
		name: PropTypes.string,
		url: PropTypes.string,
		width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		fill: PropTypes.string
};

Icon.defaultProps = {
		name: 'chevron',
		width: 16,
		height: 16,
		fill: 'currentColor'
};

export default Icon;
