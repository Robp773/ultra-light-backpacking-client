import React from 'react';
import {shallow, mount} from 'enzyme';

import CategoryTotal from './CategoryTotal';

describe('<CategoryTotal />', () => {
    it('Renders without crashing', () => {
        shallow(<CategoryTotal weightTotal={9} />);
    });
});