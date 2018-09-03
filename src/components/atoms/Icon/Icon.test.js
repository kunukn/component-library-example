import React from 'react';
import { shallow } from 'enzyme';
import Icon from './Icon';

const wrap = (props = {}) => shallow(<Icon {...props} />);

test('render icon', () => {
  const wrapper = wrap({
    children: 'chevron',
  });
  expect(true); // todo write tests
});
