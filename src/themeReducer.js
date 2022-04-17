import { Reducer } from "redux";
import { CHANGE_THEME, changeTheme } from "./configuration/actions";

const themeReducer = (previousState = "light", action) => {
  if (action.type === CHANGE_THEME) {
    return action.payload;
  }
  return previousState;
};

export default themeReducer;
