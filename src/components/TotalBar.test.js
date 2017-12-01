import React from 'react';
import {shallow, mount} from 'enzyme';

import {TotalBar} from './TotalBar';

describe('<TotalBar />', () => {
    it('Renders without crashing', () => {
        shallow(<TotalBar totals={{totalItems :5, totalWeight: 4, weightGoal: 50}} />);
    });
});