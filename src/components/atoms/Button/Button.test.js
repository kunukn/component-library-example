import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

const wrap = (props = {}) => shallow(<Button {...props} />);

test('render button title', () => {
  const wrapper = wrap({
    children: 'test',
    onClick: () => console.log('clicked')
  });
  expect(wrapper.contains('test')).toBe(true);
});
