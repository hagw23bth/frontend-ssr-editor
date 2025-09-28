import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DocumentEdit from './components/DocumentEdit';
import Header from './components/Header';
import Footer from './components/Footer';

import DocumentViewRoute from './pages/ViewDocument';
import HomePage from './pages/HomePage';

function App() {
  const [documents, setDocuments] = useState([]);

  function fetchDocuments() {
    fetch('http://localhost:1337/api/documents')
      .then(res => res.json())
      .then(data => setDocuments(data.data));
  }

  useEffect(() => {
    fetchDocuments();
  }, []);

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={
            <HomePage documents={documents} onCreated={fetchDocuments} />
          } />
          <Route path="/view/:id" element={<DocumentViewRoute onUpdate={fetchDocuments} />} />
          <Route path="/edit/:id" element={<DocumentEdit onUpdated={fetchDocuments} />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;