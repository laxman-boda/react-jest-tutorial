import React from 'react'
import { shallow } from 'enzyme';
import Header from './Header';
import { findByTestArr } from '../../../Utils/Index';

const setUp = (props={}) => {
    const componet = shallow(<Header {...props} />)
    return componet
}


describe('Header componet',() => {

    let componet;

    beforeEach(() => {
        componet = setUp();
    })

    it('It should render withour errors',() => {
        const wrapper = findByTestArr(componet,'headerComponent');
        expect(wrapper.length).toBe(1)
    })

    it('Should render logo images',() => {
        const wrapper = findByTestArr(componet,'logoIMG')
        expect(wrapper.length).toBe(1)
    })

})