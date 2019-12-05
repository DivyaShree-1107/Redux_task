import * as ActionTypes from './Types';

export function updateA3 (c) {
    return function (dispatch){
        dispatch ({
            type : 'UPDATE_A', value : c
        });
    }
}

export function updateB3 (d) {
    return function (dispatch){
        dispatch ({
            type : 'UPDATE_B', value : d
        });
    }
}
export function updateC3 (a) {
    return function (dispatch){
        dispatch ({
            type : 'UPDATE_C', value : a
        });
    }
}
export function updateD3 (b) {
    return function (dispatch){
        dispatch ({
            type : 'UPDATE_D', value : b
        });
    }
}
