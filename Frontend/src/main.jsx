import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter } from "react-router-dom";
import { GradientProvider } from "./context/MyContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain = {import.meta.env.VITE_DOMAIN}
        clientId={import.meta.env.VITE_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <GradientProvider>
          <App />
        </GradientProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);