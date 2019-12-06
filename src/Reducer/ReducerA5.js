import * as ActionTypes from '../Actions/Type5';


const initialState={
   color:yellow
}


export default (state=initialState, action ) => {
    switch (action.type) {
        case ActionTypes.UPDATE_RED: {
    
            return {...state, num:state.color+action.value};
        }
        case ActionTypes.UPDATE_GREEN: {
    
            return {...state, num:state.color-action.value};
        }
        case ActionTypes.UPDATE_BLUE: {
    
            return {...state, num:state.color+action.value};
        }
        case ActionTypes.UPDATE_PINK: {
    
            return {...state, num:state.color-action.value};
        }
       
    }        
        default :{
            return state ;
        }
    }
}