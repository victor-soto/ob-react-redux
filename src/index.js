import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { createAsyncAppStore } from "./store/config/storeConfig";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={createAsyncAppStore()}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
