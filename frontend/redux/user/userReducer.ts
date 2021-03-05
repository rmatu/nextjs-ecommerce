import * as userActions from "./userTypes";
import { UserState, UserActionTypes } from "./userTypes";
import { getLocalStorage } from "../../utils/helpers";
import { localStorageNames } from "../../constants";

const userDefaultState: UserState = {
  user: getLocalStorage(localStorageNames.USER_INFO),
  loading: false,
  error: null,
};

const userReducer = (state = userDefaultState, action: UserActionTypes) => {
  switch (action.type) {
    case userActions.USER_CLEAN_UP:
      return { ...state, error: null, loading: false };
    case userActions.USER_SIGNIN_REQUEST:
      return { ...state, loading: true };
    case userActions.USER_SIGNIN_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };
    case userActions.USER_SIGNIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;