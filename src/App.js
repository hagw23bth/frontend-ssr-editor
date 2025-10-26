import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useCallback } from 'react';
import DocumentEdit from './components/DocumentEdit';
import Header from './components/Header';
import Footer from './components/Footer';

import DocumentViewRoute from './pages/ViewDocument';
import HomePage from './pages/HomePage';

function App() {
  const [documents, setDocuments] = useState([]);

  const API_BASE =
    process.env.REACT_APP_API_URL ||
    'https://jsramverk-editor-hagw23-ejdwfcdze7cna8a5.northeurope-01.azurewebsites.net';

  const fetchDocuments = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/api/documents`);
      const json = await res.json();
      setDocuments(json.data || []);
    } catch (err) {
      setDocuments([]);
    }
  }, [API_BASE]);

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