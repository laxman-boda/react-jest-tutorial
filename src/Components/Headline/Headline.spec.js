import { shallow } from "enzyme";
import React from "react";
import { findByTestArr } from "../../../Utils/Index";
import Headline from "./Headline";

const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component
}

describe('Headline component',() => {
    
    describe('Have props',() =>{

        let wrapper;

        beforeEach(() => {
            const props = {
                header:'Test Header',
                desc:'Test Desc'
            }
            wrapper = setUp(props)
        })

        it('Should render without errors',() => {

            const component = findByTestArr(wrapper,'HeadlineComponent');
            expect(component.length).toBe(1)
        })

        it('Should render a H1',() => {
            const h1 = findByTestArr(wrapper,'header');
            expect(h1.length).toBe(1)
        })
        it('Should render desc',() => {
            const desc = findByTestArr(wrapper,'desc');
            expect(desc.length).toBe(1)
        })
    })

    describe('Have no props',() => {

        let wrapper;
        beforeEach(() => {
            wrapper = setUp()
        })

        it('Should render a H1',() => {
            const h1 = findByTestArr(wrapper,'header');
            expect(h1.length).toBe(0)
        })
        it('Should render desc',() => {
            const desc = findByTestArr(wrapper,'desc');
            expect(desc.length).toBe(0)
        })

    })
})