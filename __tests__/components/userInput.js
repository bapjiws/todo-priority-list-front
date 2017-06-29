import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json'; // Documentation: https://github.com/adriantoine/enzyme-to-json

import { UserInput } from '../../src/components/UserInput';

describe('UserInput', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<UserInput />)
    });

    it('renders correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should update pieces of its own state', () => {
        wrapper.find('input[name="priority"]').simulate('change', { target: { name: 'priority', value: 3 } });
        expect(wrapper.state('priority')).toBe(3);

        wrapper.find('input[name="name"]').simulate('change', { target: { name: 'name', value: 'do laundry' } });
        expect(wrapper.state('name')).toBe('do laundry');

        wrapper.find('input[name="description"]').simulate('change', { target: { name: 'description', value: 'quickly!' } });
        expect(wrapper.state('description')).toBe('quickly!');
    })
});