import { INCREMENT, DECREMENT } from '../actions/types';

const initialState = {
    count: 0
}

export default (state = initialState, action) => {
    const { type } = action;
    switch(type){
        case INCREMENT: 
        return {
            ...state,
            count: ++state.count
        }
        case DECREMENT: 
        return {
            ...state,
            count: --state.count
        }
        default: return state
    }
}