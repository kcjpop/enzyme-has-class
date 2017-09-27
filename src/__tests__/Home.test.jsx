/* global describe, expect, test */

import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from '../Home';

Enzyme.configure({ adapter: new Adapter() });

describe('Home', () => {
  test('mount', () => {
    const wrapper = mount(<Home />);
    
    console.log('mount', wrapper.debug());
    
    expect(wrapper.hasClass('foo')).toBe(true); // failed
    expect(wrapper.find('span').hasClass('red')).toBe(true); // passed
  });

  test('shallow', () => {
    const wrapper = shallow(<Home />);

    console.log('shallow', wrapper.debug());
    
    expect(wrapper.hasClass('foo')).toBe(true); // passed
    expect(wrapper.find('span').hasClass('red')).toBe(true); // passed
  });
});
