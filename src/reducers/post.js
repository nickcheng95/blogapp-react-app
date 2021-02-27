export default (state=[],action) => {
    switch(action.type){
        case 'ADD_POST': 
            return [...state,action.post];

        case 'EDIT_POST': 
            return state.map((val)=>{
                if(val.id===action.id){
                    return {
                        ...val,
                        ...action.updates
                    }
                }else{
                    return val;
                }
            });
        

        case 'REMOVE_POST': 
            return state.filter((val)=>{
                if(val.id!==action.id){return val}
            })

        case 'SET_POST':
            return action.posts
        
        default: return state
    }
}