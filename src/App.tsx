import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<ContactsPage />} />
        </Routes>
    </Router>
  );
}

export default App;
