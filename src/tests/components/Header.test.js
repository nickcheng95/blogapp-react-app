import {Header} from '../../components/Header'
// import ReactShallowRenderer from 'react-test-renderer/shallow'
import React from 'react';
import {shallow} from 'enzyme'

test('should render Header',()=>{
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header></Header>);
//     expect(renderer.getRenderOutput()).toMatchSnapshot()
    const wrapper = shallow(<Header startLogout={()=>{}}></Header>)
    expect(wrapper).toMatchSnapshot()

})

test('should handle logout onClick',()=>{
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}></Header>)
    wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled();
});


