const defaultstate = {
    text: '',
    sortBy: 'up'
}

export default (state=defaultstate,action) => {
    switch(action.type){
        case 'TEXT_FILTER': return {
            ...state,
            text: action.text
        }

        case 'SORTBY_TITLE_UP': return {...state,sortBy:'up'}

        case 'SORTBY_TITLE_DOWN': return {...state,sortBy:'down'}

        default: return state
    }
}