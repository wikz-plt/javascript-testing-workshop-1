import React from 'react';
import { shallow } from 'enzyme';
import Layout from './Layout';
import Header from './Header';


describe('<Layout />', () => {
    it('renders the <Header /> component', () => {
        const wrapper = shallow(<Layout/>);

        wrapper.setState({
            theme: 'light'
        });


        expect(wrapper.find(Header).exists()).toEqual(true);
    });
});