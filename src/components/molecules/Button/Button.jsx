import './button.scss';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getModifiersArray, elementFactory, modifierFactory } from 'src/utils';

const BLOCK = 'button';
const E = elementFactory(BLOCK);
const M = modifierFactory(BLOCK);

export default function Button({ children, onClick, disabled, className, modifiers, mod, type, icon }) {
  return (
    <button
      className={cx(
        getModifiersArray(BLOCK, mod || modifiers),
        {
          [M('with-icon')]: !!icon,
        },
        className
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <div className={E('text')}>{children}</div> {icon}
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
