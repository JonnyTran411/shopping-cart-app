// src/index.js
import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot từ React 18
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";

const container = document.getElementById("root");
const root = createRoot(container); // Tạo root từ container

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
