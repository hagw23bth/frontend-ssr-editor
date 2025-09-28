import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Formuläret för att skapa ett nytt dokument.
 */
function DocumentForm({ onCreated }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate(); // Skapa navigate-funktionen

  async function handleSubmit(e) {
    e.preventDefault();

    // Skicka till backend-API
    const response = await fetch('http://localhost:1337/api/documents', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    });

    if (response.ok) {
      setTitle('');
      setContent('');
      if (onCreated) {
        onCreated();
      }
      navigate('/'); // Omdirigera till hem
    } else {
      alert('Kunde inte skapa dokument');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="new-doc">
      <label htmlFor="title">Titel</label>
      <input
        type="text"
        name="title"
        placeholder="Skriv titel här"
        required
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <label htmlFor="content">Innehåll</label>
      <textarea
        name="content"
        placeholder="Skriv innehåll här"
        required
        value={content}
        onChange={e => setContent(e.target.value)}
      />

      <input type="submit" value="Skapa" />
    </form>
  );
}

export default DocumentForm;