import React from 'react';
import Home from './pages/Home'; // Import the Home page component

const App: React.FC = () => {
  return (
    // You could add a wrapper div here if needed for global layout styling
    // <div className="app-container">
      <Home />
    // </div>
  );
};

export default App;