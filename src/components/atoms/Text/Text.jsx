import React from 'react';
import cx from 'classnames';
import './text.scss';

export default function Text({ children, modifiers, className }) {
  const modifiersArray = modifiers
    .trim()
    .split(' ')
    .map(m => m.trim())
    .filter(Boolean);
  const cssModifiers = modifiersArray.map(m => `text--${m}`);
  return <p className={cx('text', cssModifiers, className)}>{children}</p>;
}

Text.defaultProps = {
  modifiers: '',
};
