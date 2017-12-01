import React from 'react';
import {shallow, mount} from 'enzyme';

import {AddForm} from './AddForm';

describe('<AddForm />', () => {
    it('Renders without crashing', () => {
        shallow(<AddForm />);
    });
});