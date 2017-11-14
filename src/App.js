import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import PostDetails from "./pages/PostDetails";
import NotFoundPage from "./pages/NotFoundPage";

import styles from "./App.css";

import { Route, Switch } from "react-router-dom";

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header />

          <div className={`${styles.main} ${styles.mainPadding}`}>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/:category" component={Main} />
              <Route exact path="/:category/:postId" component={PostDetails} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
