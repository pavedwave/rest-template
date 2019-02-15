import * as ActionTypes from './ActionTypes';

export const Things = (state = {
    isLoading: true,
    errMess: null,
    things: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_THINGS:
            return {...state, isLoading: false, errMess: null, things: action.payload}

        case ActionTypes.THINGS_LOADING:
            return {...state, isLoading: true, errMess: null, things: []}

        case ActionTypes.THINGS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, things: []}

        default:
            return state;
    }
}