import './icon.scss';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default function Icon({ children, name, path, width, height, fill, modifiers, className }) {
  const content = children || name;

  if (!(content || path)) {
    return null;
  }

  const modifiersArray = modifiers
    .trim()
    .split(' ')
    .map(m => m.trim())
    .filter(Boolean);
  const cssModifiers = modifiersArray.map(m => `icon--${m}`);

  let url = path ? path : '#' + content;
  url = url.trim();

  return (
    <svg fill={fill} width={width} height={height} className={cx('icon', cssModifiers, className)}>
      <use xlinkHref={url} />
    </svg>
  );
}

Icon.propTypes = {
  children: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string,
  modifiers: PropTypes.string,
  className: PropTypes.string,
};

Icon.defaultProps = {
  name: 'chevron',
  width: null,
  height: null,
  color: 'currentColor',
  fill: 'currentColor',
  modifiers: '',
};
