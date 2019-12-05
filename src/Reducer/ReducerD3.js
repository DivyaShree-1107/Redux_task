import * as ActionTypes from '../Actions/Type3';


const initialState={
    ageD:2,
}

export default (state=initialState, action ) => {
    switch (action.type) {
        case ActionTypes.UPDATE_D: {
            return {...state, ageD:state.ageD+action.value};
        }
        default :{
            return state ;
        }
    }
}