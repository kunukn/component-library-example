import './button.scss';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {getModifiersArray, E, M} from 'src/utils';

const BLOCK = 'button';
const e = element => E(BLOCK, element);
const m = modifier => M(BLOCK, modifier);

export default function Button({ children, onClick, disabled, className, modifiers, mod, type, icon }) {
  
  return (
    <button
      className={cx(
        getModifiersArray(BLOCK, modifiers || mod),
        {
          [m('with-icon')]: !!icon,
        },
        className
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <div className={e("text")}>{children}</div> {icon}
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
