import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DocumentView from '../components/DocumentView';

function DocumentViewRoute() {
  const { id } = useParams();
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:1337/api/documents/${id}`)
      .then(res => res.json())
      .then(data => setDoc(data.data));
  }, [id]);

  return <DocumentView doc={doc} />;
}

export default DocumentViewRoute;