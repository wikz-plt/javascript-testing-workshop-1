import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
    it('renders the header element with corresponding theme class', () => {
        const onClickHandler = jest.fn();
        const wrapper = shallow(<Header theme="dark" onClick={onClickHandler} />);
        expect(wrapper.find('header').hasClass('header-dark')).toEqual(true);
    });

    it('calls the onClick prop when button has been clicked', () => {
        const onClickHandler = jest.fn();
        const wrapper = shallow(<Header theme="dark" onClick={onClickHandler} />);

        const button = wrapper.find('button.change-theme-button');
        button.simulate('click');

        expect(onClickHandler).toHaveBeenCalledTimes(1);
    });
});