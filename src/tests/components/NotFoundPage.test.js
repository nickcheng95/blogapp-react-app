import NotFoundPage from '../../components/NotFoundPage'
import React from 'react';
import {shallow} from 'enzyme'


test('should render 404 page',()=>{
    const wrapper = shallow(<NotFoundPage></NotFoundPage>)
    expect(wrapper).toMatchSnapshot();
});

