import { 
USER_LIST_REQUEST,
USER_LIST_SUCCESS,
USER_LIST_ERROR,
} from "../contants/constants";
import { userslistservice } from "../Services/users-list-service";

export const listUsers = (params) => {
return (dispatch) =>{
    dispatch(requestUsers(params));
    userslistservice
    .listUsers(params)
     
    .then((response) => {
        dispatch(listUsersSuccess(response));

    })

    .catch((response) =>{
         dispatch(listUserError(response));

    });
};
};
function requestUsers(params){
    return {
        type: USER_LIST_REQUEST, 
        params,
    };
}

function listUsersSuccess(response){
    return {
        type: USER_LIST_SUCCESS, 
        response,
    };
}

function listUserError(response){
    return {
        type: USER_LIST_ERROR, 
        response,
    }; 
}
