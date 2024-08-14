import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage';
import DashboardPage from './pages/DashboardPage';
import Layout from './components/Layout'
import ContactDetails from './components/ContactDetails';
import NotFound from './pages/NotPound';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ContactsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/contacts/:id" element={<ContactDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
