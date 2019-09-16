jest.mock('./RequestService');

import React from 'react';
import NewsletterComponent from './NewsletterComponent';
import { shallow } from 'enzyme';
import { post } from './RequestService';

describe('NewsletterComponent', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders without errors', () => {
        const wrapper = shallow(<NewsletterComponent/>);

        expect(wrapper.exists('.newsletter-container')).toEqual(true);
    });

    it('renders a h4 element with correct text in it', () => {
        const wrapper = shallow(<NewsletterComponent/>);

        const heading = wrapper.find('h4');

        expect(heading.exists()).toEqual(true);
        expect(heading.text()).toEqual('Sign up to our Newsletter!');
    });

    it('renders a form with input and a button', () => {
        const wrapper = shallow(<NewsletterComponent/>);

        expect(wrapper.exists('form')).toEqual(true);
        expect(wrapper.exists('form input')).toEqual(true);
        expect(wrapper.exists('form button')).toEqual(true);
    });

    it('has an email input that is required', () => {
        const wrapper = shallow(<NewsletterComponent/>);

        expect(wrapper.find('form input').props()).toHaveProperty('required');
        expect(wrapper.find('form input').props().required).toEqual(true);
    });

    it('renders an error element if error in state is true', () => {
        const wrapper = shallow(<NewsletterComponent/>);
        wrapper.setState({
            error: 'An error occurred'
        });

        expect(wrapper.find('p.error').exists()).toEqual(true);
        expect(wrapper.find('p.error').text()).toEqual('An error occurred');
    });

    it('calls API with the current email on form submit', () => {
        const wrapper = shallow(<NewsletterComponent/>);
        const eventMock = { preventDefault: jest.fn() };

        wrapper.setState({
            email: 'wiktor@zawierucha.com'
        });

        wrapper.find('form').simulate('submit', eventMock);

        expect(eventMock.preventDefault).toHaveBeenCalled();
        expect(post).toHaveBeenCalled();
        expect(post).toHaveBeenCalledWith('http://completely-fake.website/api/newsletter', { email: 'wiktor@zawierucha.com' });
    });

    it('sets the proper error if server responded with 422', async () => {
        const wrapper = shallow(<NewsletterComponent/>);
        const eventMock = { preventDefault: jest.fn() };

        wrapper.setState({
            email: 'test@emailcom'
        });

        post.mockResolvedValueOnce({
            ok: false,
            status: 422,
            body: { error: true }
        });

        await wrapper.instance().handleSubmit(eventMock);

        expect(wrapper.state().error).toEqual('Your email is invalid');
    });
});