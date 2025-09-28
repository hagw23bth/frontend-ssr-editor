import { useState } from 'react';

/**
 * View and edit an existing document.
 */
function DocumentEdit({ doc, onSubmit }) {
  const [title, setTitle] = useState(doc.title);
  const [content, setContent] = useState(doc.content);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ ...doc, title, content });
  }

  return (
    <form onSubmit={handleSubmit} className="edit-doc">
      <input type="hidden" name="id" value={doc.id} />
      <label htmlFor="title">Titel</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <label htmlFor="content">Innehåll</label>
      <textarea
        name="content"
        value={content}
        onChange={e => setContent(e.target.value)}
      />

      <input type="submit" value="Uppdatera" />
    </form>
  );
}
export default DocumentEdit;