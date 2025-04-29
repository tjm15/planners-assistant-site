import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure this import is correct
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

const rootElement = document.getElementById('root'); // Check if 'root' matches index.html
if (rootElement) { // Good practice to check if it exists
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
} else {
  console.error("Failed to find the root element. Check your index.html file.");
}