function DocumentView({ doc }) {
  if (!doc) return <p>Dokument hittades inte.</p>;

  return (
    <div className="document-view">
      <h2>{doc.title}</h2>
      <div>{doc.content}</div>
    </div>
  );
}

export default DocumentView;