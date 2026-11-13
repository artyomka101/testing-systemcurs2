import React from "react";
import ReactDOM from "react-dom/client";
import { Global, css } from "@emotion/react";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          color: #111318;
        }

        button,
        input {
          font: inherit;
        }
        button {
          cursor: pointer;
        }
        a {
          color: #1672f7;
        }
      `}
    />
    <App />
  </React.StrictMode>,
);
