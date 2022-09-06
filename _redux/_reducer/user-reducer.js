import { Console } from "mdi-material-ui";
import {ALL_USERS} from "../_action/action-type";


const initialState = {
  users:[]
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case ALL_USERS:
      return{
        ...state,
        users: action.users

      };
    default:
      return state;
  }
};

export default userReducers;

