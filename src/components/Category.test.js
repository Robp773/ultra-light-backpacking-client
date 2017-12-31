import React from 'react';
import {shallow, mount} from 'enzyme';

import Category from './Category';
// test for actions
// addBtn simulation
describe('<Category />', () => {
    it('Renders without crashing', () => {
        shallow(<Category thisState={[]} />);
    });
});