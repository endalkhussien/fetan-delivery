import React from 'react';
import Header from './Header';  // Make sure to import the updated Header
import Products from './Products';
// import Sidebar from './Sidebar';  // Import Sidebar component
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-layout">
        {/* <Sidebar />  Add Sidebar */}
        <main>
          <section className="welcome-section">
            <h2>Welcome to Esset-Delivery!</h2>
            <p>Order delicious food delivered to your door in minutes.</p>
          </section>
          <Products />
        </main>
      </div>
    </div>
  );
}

export default App;
