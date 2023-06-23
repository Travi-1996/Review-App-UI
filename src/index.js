import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { getStore } from "./store";
import { RVToastContainer } from "./components/alert/RVToastContainer";
import { AppRoutes } from "./routes/AppRoutes";
const store = await getStore();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes/>
        <RVToastContainer/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
