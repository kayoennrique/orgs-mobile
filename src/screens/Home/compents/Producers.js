import React, { useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import { loadingProducers } from '../../../services/dataLoading';

export default function Producers({ header: Header }) {
  const [title, setTitle] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const retorno = loadingProducers();
    setTitle(retorno.title);
    setList(retorno.list);

  }, []);

  const HeaderList = () => {
    return <>
      <Header />
      <Text style={styles.title}>{title}</Text>
    </>
  }

  return <FlatList
    data={list}
    renderItem={({ item: { name } }) => <Text>{name}</Text>}
    keyExtractor={({ name }) => name}
    ListHeaderComponent={HeaderList} />
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  }
})