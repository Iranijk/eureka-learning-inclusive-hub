
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add console log for debugging
console.log("Main.tsx is loading with BASE_URL:", import.meta.env.BASE_URL);

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = createRoot(container);
root.render(<App />);
