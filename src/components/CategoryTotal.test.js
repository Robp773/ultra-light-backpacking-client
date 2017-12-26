import React from 'react';
import {shallow, mount} from 'enzyme';

import CategoryTotal from './CategoryTotal';

describe('<CategoryTotal />', () => {
    it('Renders without crashing', () => {
        shallow(<CategoryTotal weightTotal={9} />);
    });

    it('Should render the correct elements', () => {
        const wrapper = shallow(<CategoryTotal weightTotal={9} />);
        expect(wrapper.find('.itemTotal').length).toBe(1);
        expect(wrapper.find('.weightTotal').length).toBe(1);
        expect(wrapper.find('.categoryIcon').length).toBe(1);
        expect(wrapper.find('.topCategory').length).toBe(1);
        expect(wrapper.find('.bgColorDiv').length).toBe(1);
        
    });
});