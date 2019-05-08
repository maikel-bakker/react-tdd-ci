import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme';
import { Recipe } from './Recipe';
import { IRecipe } from './Recipe';

const recipeMock : IRecipe = {
    _id: '12334346',
    title: 'title',
    description: 'description'
}

describe('<Recipe />', () => {
    let wrapper: ShallowWrapper;
    let title: ShallowWrapper;
    let description: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Recipe recipe={recipeMock} />);
        title = wrapper.find('.title');
        description = wrapper.find('.description');
    });

    it('Has a title element', () => {
        expect(title).toHaveLength(1)
    });

    it('Has a description element', () => {
        expect(description).toHaveLength(1)
    });

    it('Has the right title text', () => {
        expect(title.text()).toBe(recipeMock.title);
    });

    it('Has the right description text', () => {
        expect(description.text()).toBe(recipeMock.description);
    });
})
