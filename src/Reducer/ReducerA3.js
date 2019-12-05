import * as ActionTypes from '../Actions/Type3';


const initialState={
    ageA:2,
}

export default (state=initialState, action ) => {
    switch (action.type) {
        case ActionTypes.UPDATE_A: {
            return {...state, ageA:state.ageA+action.value};
        }
        default :{
            return state ;
        }
    }
}