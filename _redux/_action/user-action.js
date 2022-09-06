import {ALL_USERS} from "./action-type";
import { pageLoading, alertError, alertWarring } from "./alert-actions";
import Api from "../tools/api";

export const changeAllUsers = users => {
  const type = ALL_USERS;
  return { type, users };
};


export const getUsers = () => {

  return async dispatch => {
      // despath(pageLoading(true));
      const res = await Api.get(`/users`);
      // despath(pageLoading(false));
      let users =[];
      for(let i=0 ; i<res.data.length; i++){
          users = [
            ...users,
            {
              id:res.data[i].id,
              name:res.data[i].name,
              username:res.data[i].username,
              email:res.data[i].email,
              address:`${res.data[i].address.street},${res.data[i].address.suite},${res.data[i].address.city}`,
              zipcode:res.data[i].address.zipcode
            }
          ]
      };
      // dispatch(changeAllUsers(users));?
    
         dispatch(changeAllUsers(users))


      // else{
          dispatch(alertWarring(users))
      // }
  }
}
