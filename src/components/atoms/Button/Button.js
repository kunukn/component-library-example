import './button.scss';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from 'components/atoms';

export default function Button({ children, onClick, disabled, className, modifiers, type, icon, iconPath }) {
  const modifiersArray = modifiers
    .trim()
    .split(' ')
    .map(m => m.trim())
    .filter(Boolean);
  const cssModifiers = modifiersArray.map(m => `button--${m}`);

  let hasIcon = icon || iconPath;

  return (
    <button
      className={cx('button', className, cssModifiers, { 'button--with-icon': hasIcon })}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {!hasIcon && children}
      {hasIcon && (
        <Fragment>
          <div className="button__text">{children}</div>
          <Icon name={icon} path={iconPath} />
        </Fragment>
      )}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  name: PropTypes.string,
  className: PropTypes.string,
  modifiers: PropTypes.string,
  icon: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  modifiers: '',
  type: 'button',
};
