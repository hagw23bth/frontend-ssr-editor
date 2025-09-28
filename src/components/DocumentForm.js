import { useState } from 'react';

/**
 * Form to create a new document with title and content.
 */
function DocumentForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');s
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle('');
    setContent('');
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