import { Link } from 'react-router-dom';

/**
 * Visar en lista med dokument-titlar.
 * Tar emot en array med dokument som prop.
 */
function DocumentList({ documents }) {
  return (
    <ul>
      {documents.map(doc => (
        <li key={doc._id} className="doc-list-item">
        <span>{doc.title}</span>
        <Link to={`/edit/${doc._id}`}>Redigera</Link>
        </li>
      ))}
    </ul>
  );
}

export default DocumentList;