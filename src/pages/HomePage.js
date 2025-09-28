import DocumentList from '../components/DocumentList';
import DocumentForm from '../components/DocumentForm';

function HomePage({ documents, onCreated }) {
  return (
    <>
      <DocumentList documents={documents} />
      <DocumentForm onCreated={onCreated} />
    </>
  );
}

export default HomePage;