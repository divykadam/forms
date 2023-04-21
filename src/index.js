import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import App from "./Routing/App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
