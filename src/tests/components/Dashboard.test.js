import DashboardPage from '../../components/DashboardPage'
import React from 'react';
import {shallow} from 'enzyme'


test('should render expense dashboard',()=>{
    const wrapper = shallow(<DashboardPage></DashboardPage>)
    expect(wrapper).toMatchSnapshot();
});

