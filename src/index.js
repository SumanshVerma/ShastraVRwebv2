import { StrictMode } from "react";
    import ReactDOM from "react-dom";
    
    import WebFont from "webfontloader";
    import App from "./App";

    WebFont.load({
        google: {
            families: ['Poppins', "League Spartan:300,400,700,500,600","Manrope:","DM Sans:400,700"]
        }
      });

    const rootElement = document.getElementById("root");
    ReactDOM.render(
      <StrictMode>
        <App />
      </StrictMode>,
      rootElement
    );
    