import './button.scss';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
//import { Icon } from 'components';

export default function Button({ children, onClick, disabled, className, modifiers, type, icon }) {
  const modifiersArray = modifiers
    .trim()
    .split(' ')
    .map(m => m.trim())
    .filter(Boolean);
  const cssModifiers = modifiersArray.map(m => `button--${m}`);

  return (
    <button
      className={cx(
        'button',
        cssModifiers,
        {
          'button--with-icon': !!icon,
        },
        className
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <div className="button__text">{children}</div> {icon}
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  name: PropTypes.string,
  className: PropTypes.string,
  modifiers: PropTypes.string,
  icon: PropTypes.any,
};
Button.defaultProps = {
  className: '',
  modifiers: '',
  type: 'button',
};
