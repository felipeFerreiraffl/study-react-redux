import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./app/store.js"; // Importa o store do Redux
import { Provider } from "react-redux"; // Importa o Provider do Redux

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Envolve o App com o Provider para disponibilizar o store do Redux */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
