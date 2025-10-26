import DocumentList from '../components/DocumentList';
import DocumentForm from '../components/DocumentForm';

function HomePage({ documents, onCreated }) {
  return (
    <>
      <h2>Välkommen till SSR Editor</h2>
      <DocumentList documents={documents} />
      <DocumentForm onCreated={onCreated} />
    </>
  );
}

export default HomePage;