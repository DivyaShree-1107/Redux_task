import * as ActionTypes from './Types';

export function UPDATERED() {
    return function (dispatch){
        dispatch ({
            type : 'update_Red', value : 1
        });
    }
}
export function UPDATEGREEN() {
    return function (dispatch){
        dispatch ({
            type : 'update_Green', value : 1
        });
    }
}
export function UPDATEBLUE() {
    return function (dispatch){
        dispatch ({
            type : 'update_Blue', value : 1
        });
    }
}
export function UPDATEPINK() {
    return function (dispatch){
        dispatch ({
            type : 'update_Pink', value : 1
        });
    }
}
