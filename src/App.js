import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { API_BASE } from './config';
import DocumentEdit from './components/DocumentEdit';
import Header from './components/Header';
import Footer from './components/Footer';

import DocumentViewRoute from './pages/ViewDocument';
import HomePage from './pages/HomePage';

function App() {
  const [documents, setDocuments] = useState([]);

  const fetchDocuments = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/api/documents`);
      const json = await res.json();
      setDocuments(json.data || []);
    } catch (err) {
      setDocuments([]);
    }
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <HomePage documents={documents} onCreated={fetchDocuments} />
          } />
          <Route path="/view/:id" element={<DocumentViewRoute onUpdate={fetchDocuments} />} />
          <Route path="/edit/:id" element={<DocumentEdit onUpdated={fetchDocuments} />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;