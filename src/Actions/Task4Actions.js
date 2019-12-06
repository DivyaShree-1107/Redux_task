import * as ActionTypes from './Types';

export function updateNumAdd() {
    return function (dispatch){
        dispatch ({
            type : 'update_numadd', value : 1
        });
    }
}


export function updateNumSub() {
    return function (dispatch){
        dispatch ({
            type : 'update_numsub', value : 1
        });
    }
}
export function updateInc() {
    return function (dispatch){
        dispatch ({
            type : 'update_numinc', value : 1
        });
    }
}
