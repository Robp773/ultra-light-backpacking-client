import React from 'react';
import {shallow, mount} from 'enzyme';

import {AddForm} from './AddForm';

describe('<AddForm />', () => {
    it('Renders without crashing', () => {
        const wrapper = shallow(<AddForm />);
    });
    it('Renders the correct nodes', ()=>{
        const wrapper = shallow(<AddForm />)
        
        expect(wrapper.hasClass('addForm')).toEqual(true)
        
        
    })
});
