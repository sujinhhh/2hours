import { Curtains } from "curtainsjs";
import React from "react";


const initialState = 0

// Action type 설
export const SET_CURTAINS_CONTAINER = "SET_CURTAINS_CONTAINER";

export const SET_SCROLL_EFFECT = "SET_SCROLL_EFFECT";

// Action  생성 함수
export const courtainContainer = () => ({
  type: SET_CURTAINS_CONTAINER,
});
export const scrollEffectAction = () => ({
  type: SET_SCROLL_EFFECT,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURTAINS_CONTAINER":
      return {
        ...state,
        container: action.payload,
      };
    case "SET_SCROLL_EFFECT":
      return {
        ...state,
        scrollEffect: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
