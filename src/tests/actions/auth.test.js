import {login,logout} from '../../actions/auth'

test('should setup login action obj',()=>{
    const action = login('123abc');
    expect(action).toEqual({
        type: 'LOGIN',
        uid:'123abc'
    })
});

test('should setup logout action obj',()=>{
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT',
    })
});