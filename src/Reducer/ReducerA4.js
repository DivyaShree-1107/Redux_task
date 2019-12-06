import * as ActionTypes from '../Actions/Type4';


const initialState={
    num:1,
}

export default (state=initialState, action ) => {
    switch (action.type) {
        case ActionTypes.UPDATE_NUM_ADD: {
    
            return {...state, num:state.num+action.value};
        }
        case ActionTypes.UPDATE_NUM_SUB: {
    
            return {...state, num:state.num-action.value};
        }
        case ActionTypes.UPDATE_NUM_INC: {
            if(state.num%2==0){
            return {...state, num:state.num+action.value};
        }
    }        
        default :{
            return state ;
        }
    }
}