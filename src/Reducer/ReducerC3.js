import * as ActionTypes from '../Actions/Type3';


const initialState={
    ageC:2,
}

export default (state=initialState, action ) => {
    switch (action.type) {
        case ActionTypes.UPDATE_C: {
            return {...state, ageC:state.ageC+action.value};
        }
        default :{
            return state ;
        }
    }
}