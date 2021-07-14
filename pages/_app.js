import "../styles/styles.scss";
import Layout from "../components/layout";
import withRedux from "next-redux-wrapper";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../redux/reducers/";
import { createWrapper } from "next-redux-wrapper";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// Redux store
const confiureStore = (intialState, option) => {
  const middlewares = [];
  const enhancer = compose(applyMiddleware(...middlewares));
  const store = createStore(reducer, intialState, enhancer);
  return store;
};

const wrapper = createWrapper(confiureStore);

export default wrapper.withRedux(MyApp);
