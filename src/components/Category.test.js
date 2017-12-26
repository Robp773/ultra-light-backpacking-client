import React from 'react';
import {shallow, mount} from 'enzyme';

import Category from './Category';
// test for actions
// addBtn simulation
describe('<Category />', () => {
    it('Renders without crashing', () => {
        shallow(<Category thisState={[]} />);
    });
    it('Renders the right content', ()=>{
            const wrapper = shallow(<Category thisState={[]}/>);
            expect(wrapper.hasClass('category')).toEqual(true);
            expect(wrapper.find('.addBtn').length).toBe(1);
            
        });
    it('Changes the selected state on clicks', ()=>{
        const wrapper = shallow(<Category thisState={[]}/>);
        wrapper.simulate('click');   
        expect(wrapper.state('selected')).toEqual(true);
        
    });
    // it('Changes the form open state on clicks', ()=>{
    //     const wrapper =  shallow(<Category thisState={[]}/>);
    //    const button = wrapper.find('addBtn').first()
    //    button.simulate('click');
    //    expect(wrapper.state('formOpen')).toEqual(true);
       
    // });
 
    
});