import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

// Define a functional component called Footer
const Footer = () => (
  <footer className="footer">
    <p>
      By{" "}
      <a href="https://github.com/markob94" target="_blank" rel="noreferrer">
        Marko
      </a>
    </p>
  </footer>
);

// Render the App component and the Footer component inside a React.StrictMode component
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// Call the reportWebVitals function, which measures performance in the app
reportWebVitals();
