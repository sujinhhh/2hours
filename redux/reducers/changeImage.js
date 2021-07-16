import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {} from "";

const initialState = {
  image: [
    {
      mediaUrl:
        "https://images.unsplash.com/photo-1601979689063-cb474664e70b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
      title: "Summer Pastel",
    },
    {
      mediaUrl:
        "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "White day of life",
    },
    {
      mediaUrl:
        "https://images.unsplash.com/photo-1614481327033-68e5df399653?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=951&q=80",
      title: "My world",
    },
  ],
};

// Action type 설
export const CHANGE_IMAGE = "CHANGE_IMAGE";

// Action  생성 함수
export const differentImage = () => ({
  type: CHANGE_IMAGE,
});

const changeImage = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_IMAGE":
      return <div></div>;

    default:
      return state;
  }
};

export default changeImage;
