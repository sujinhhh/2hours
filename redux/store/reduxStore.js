import { Curtains } from "curtainsjs";
import { useEffect } from "react";
useEffect(() => {}, []);
const initialState = {
  curtains: new Curtains({
    pixelRatio: Math.min(1.5, window.devicePixelRatio),
  }),
  container: null,
  scrollEffect: 0,
};

// const CurtainsContext = React.createContext(initialState);

// const {Provider} = CurtainsContext;

// const CurtainsProvider = ({}) => {

//     return < Provider value={{}}> { childern }<Provider />
// }
