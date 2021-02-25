import {LoginPage} from '../../components/LoginPage'
import React from 'react';
import {shallow} from 'enzyme'

test('should render login page',()=>{
    const wrapper = shallow(<LoginPage></LoginPage>)
    expect(wrapper).toMatchSnapshot();
});

test('should handle login onClick',()=>{
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin} />)
    wrapper.find('button').simulate('click')
    expect(startLogin).toHaveBeenCalled();
});
