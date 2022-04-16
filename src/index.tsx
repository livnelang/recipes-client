import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App, { DebugObserver } from "./App";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./UserContext";
import ScrollToTop from "./hooks/ScrollToTop";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <DebugObserver />
        <UserProvider>
          <ScrollToTop />
          <App />
        </UserProvider>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
