import { useState } from "react";
import Portfolio from "../pages/portfolio";

function Loader(props) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);

  return loader ? (
    <div className="loader" />
  ) : (
    <div>
      <Portfolio />
    </div>
  );
}

export default Loader;
