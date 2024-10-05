import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.tsx";
import { PersistGate } from "redux-persist/integration/react";
import { HelmetProvider } from "react-helmet-async";
import { UserAuthProvider } from "./firebase/AuthProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <UserAuthProvider>
        <HelmetProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <RouterProvider router={router} />
            </PersistGate>
          </Provider>
        </HelmetProvider>
      </UserAuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
