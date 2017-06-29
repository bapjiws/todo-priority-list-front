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
});