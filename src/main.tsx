
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// Import debug tools for development
import "./firebase/debug";

createRoot(document.getElementById("root")!).render(<App />);
