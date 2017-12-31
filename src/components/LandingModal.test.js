import React from 'react';
import {shallow, mount} from 'enzyme';

import LandingModal from './LandingModal';

describe('<LandingModal />', () => {
    it('Renders without crashing', () => {
        shallow(<LandingModal weightTotal={9} />);
    });
});