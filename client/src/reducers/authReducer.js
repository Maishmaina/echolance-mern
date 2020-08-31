import { SET_CURRENT_USER, USER_LOADING, GET_USERS } from "../actions/types";
import isEmpty from "../validation/is-empty";
const initialState = {
  isAuthenticated: false,
  user: {},
  allUsers: [],
  loadinguser: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loadinguser: true,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        allUsers: action.payload,
        loadinguser: false,
      };
    default:
      return state;
  }
}
