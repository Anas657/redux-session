import axios from "axios";

export const userslistservice = {
    listUsers, 
};


function listUsers(params) {
return ( axios
.get('https://reqres.in/api/users?page=2')
.then((response) => {
const data = response.data;
return {
    data,
    params: params,
};

}) 

.catch((error) => {
    const err = error;
return{
    err,
    params,
};
})

)}
 