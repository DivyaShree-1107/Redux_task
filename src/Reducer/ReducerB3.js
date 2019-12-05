import * as ActionTypes from '../Actions/Type3';


const initialState={
    ageB:2,
}

export default (state=initialState, action ) => {
    switch (action.type) {
        case ActionTypes.UPDATE_B: {
            return {...state, ageB:state.ageB+action.value};
        }
        default :{
            return state ;
        }
    }
}