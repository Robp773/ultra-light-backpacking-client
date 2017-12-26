import React from 'react';
import {shallow, mount} from 'enzyme';

import {AddForm} from './AddForm';

describe('<AddForm />', () => {
    it('Renders without crashing', () => {
        shallow(<AddForm />);
    });
    it('Should render the correct elements', () => {
        let callback= jest.fn();
        const wrapper = shallow(<AddForm onSubmit={callback}/>);
        expect(wrapper.find('.addFormSubmit').length).toBe(1);
        expect(wrapper.find('.addInputName').length).toBe(1);
        expect(wrapper.find('.addInputWeight').length).toBe(1);
        expect(wrapper.find('.addForm').length).toBe(1);
    });
});

