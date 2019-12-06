import * as ActionTypes from './Types';

export function updateA () {
    return function (dispatch){
        dispatch ({
            type : 'update_num', value : 1
        });
    }
}

