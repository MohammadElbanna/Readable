import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import PostDetails from "./pages/PostDetails";

import styles from "./App.css";
import fontStyles from "font-awesome/css/font-awesome.css";

import { Route } from "react-router-dom";

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header />

          <Route exact path="/" component={Main} />
          <Route exact path="/:category/:postId" component={PostDetails} />

          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
