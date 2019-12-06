import * as ActionTypes from './Types';

export function updateA (a) {
    return function (dispatch){
        dispatch ({
            type : 'UPDATE_A', value : a
        });
    }
}
export function updateB (b) {
    return function (dispatch){
        dispatch ({
            type : 'UPDATE_B', value : b
        });
    }
}

