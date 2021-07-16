import { combineReducers } from "redux";
import count from "./count";
import changeImage from "./changeImage";

const RootReducer = combineReducers({
  count,
  changeImage,
});

export default RootReducer;
