import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_BASE } from '../config';
import DocumentView from '../components/DocumentView';

function DocumentViewRoute() {
  const { id } = useParams();
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/documents/${id}`)
      .then(res => res.json())
      .then(data => setDoc(data.data))
      .catch(() => setDoc(null));
  }, [id]);

  return <DocumentView doc={doc} />;
}

export default DocumentViewRoute;