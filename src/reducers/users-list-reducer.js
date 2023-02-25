import {
USER_LIST_REQUEST, 
USER_LIST_SUCCESS, 
USER_LIST_ERROR,
 } from '../contants/constants'
 
 const initialstate = {
    searching: true,
 }
  export const usersListReducer = (state = initialstate, action) =>{
     switch(action.type) {
        case USER_LIST_REQUEST:
        
        return{
            searching: true,
        };
            
        case USER_LIST_SUCCESS:
        
        return {
            searching: false,
            data: action.response.data,
        };

        case USER_LIST_ERROR:
        
        return {
            searching: false,
            data: action.response,
        };
        
        default: 
        return state;   
     }
  }; 