import authReducer from '../../reducers/auth'


test('should setup login reducer',()=>{
    const action = {
        type: 'LOGIN',
        uid: '123aaa'
    }
    const state = authReducer({},action);
    expect(state.uid).toBe('123aaa');
});

test('should setup logout reducer',()=>{
    const action = {
        type: 'LOGOUT',
    }
    const state = authReducer({uid:'123aaa'},action);
    expect(state).toEqual({});
});

test('should setup default auth reducer',()=>{
    const state = authReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({});
});