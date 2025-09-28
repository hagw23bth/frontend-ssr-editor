import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function DocumentEdit({ onUpdated }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:1337/api/documents/${id}`)
      .then(res => res.json())
      .then(data => setDoc(data.data));
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(`http://localhost:1337/api/documents/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: doc.title, content: doc.content })
    });
    if (response.ok) {
      if (onUpdated) onUpdated();
      navigate('/'); // Tillbaka till startsidan
    }
  }

  if (!doc) return <p>Laddar...</p>;

  return (
    <form className="edit-doc" onSubmit={handleSubmit}>
      <h2>Dokument</h2>
      <label htmlFor="title">Titel</label>
      <input
        type="text"
        name="title"
        value={doc.title}
        onChange={e => setDoc({ ...doc, title: e.target.value })}
        required
      />

      <label htmlFor="content">Innehåll</label>
      <textarea
        name="content"
        value={doc.content}
        onChange={e => setDoc({ ...doc, content: e.target.value })}
        required
      />

      <input type="submit" value="Uppdatera" />
    </form>
  );
}

export default DocumentEdit;