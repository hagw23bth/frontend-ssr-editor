/** 
 * Shows all documents in a list.
 */
function DocumentList({ documents }) {
  return (
    <div>
      <h2>Alla dokument</h2>
      <ul>
        {documents.map(doc => (
          <li key={doc.id}>
            {/* Länk till dokumentet, routing läggs till senare */}
            <span>{doc.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default DocumentList;