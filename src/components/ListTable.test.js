import React from 'react';
import {shallow, mount} from 'enzyme';

import ListTable from './ListTable';

describe('<ListTable />', () => {
    it('Renders without crashing', () => {
        shallow(<ListTable displayNames={[]}/>);
    });
});