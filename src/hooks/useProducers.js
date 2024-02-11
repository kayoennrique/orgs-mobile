import { useState, useEffect } from 'react';
import { loadingProducers } from '../services/dataLoading';

export default function useProducers() {
  const [title, setTitle] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const retorno = loadingProducers();
    retorno.list.sort(
      (productor1, productor2) => productor1.distance - productor2.distance,
    );
    setTitle(retorno.title);
    setList(retorno.list);
  }, []);

  return [title, list];
}
