import React from 'react';
import {shallow, mount} from 'enzyme';

import SelectList from './SelectList';

describe('<SelectList />', () => {
    it('Renders without crashing', () => {
        shallow(<SelectList />);
    });
});