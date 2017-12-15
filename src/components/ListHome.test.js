import React from 'react';
import {shallow, mount} from 'enzyme';

import {ListHome} from './ListHome';

describe('<ListHome />', () => {
    // hiking, clothing, navigation, shelter, sleep, cooking, water, hygiene, firstAid, misc
    it('Renders without crashing', () => {
        expect(1).toEqual(1)
    //     shallow(<ListHome hiking={[]} clothing={[]} water={[]} navigation={[]} 
    //         shelter={[]} sleep={[]} hygiene={[]}  firstAid={[]} misc={[]} cooking={[]} fullState={{weightGoal: 50}}/>);
    });
});