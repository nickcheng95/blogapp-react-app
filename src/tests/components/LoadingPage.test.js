import LoadingPage from '../../components/LoadingPage'
import React from 'react';
import {shallow} from 'enzyme'

test('should render loading page',()=>{
    const wrapper = shallow(<LoadingPage></LoadingPage>)
    expect(wrapper).toMatchSnapshot();
});

