import { useState, useEffect } from 'react';
import { loadingProducers } from '../services/dataLoading';

export default function useProducers() {
  const [title, setTitle] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const retorno = loadingProducers();
    setTitle(retorno.title);
    setList(retorno.list);
  }, []);

  return [title, list];
}
