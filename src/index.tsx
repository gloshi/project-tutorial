import { render } from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import 'app/styles/index.scss'

import "shared/config/i18/i18";
import { ErrorBoundary } from "app/providers/ErrorProvider";
import { StoreProvider } from "app/providers/StoreProvider";

render(
  <StoreProvider>
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
  </StoreProvider>,
  document.getElementById("root")
);
