import { Link } from 'react-router-dom';

/**
 * Visar en lista med dokument-titlar.
 * Tar emot en array med dokument som prop.
 */
function DocumentList({ documents }) {
  return (
    <ul>
      {documents.map(doc => (
        <li key={doc._id}>
          {doc.title}{" "}
          <Link to={`/edit/${doc._id}`}>Redigera</Link>
        </li>
      ))}
    </ul>
  );
}

export default DocumentList;