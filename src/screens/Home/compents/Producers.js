import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import Productor from './Productor';
import useProducers from '../../../hooks/useProducers';

export default function Producers({ header: Header }) {
  const [title, list] = useProducers();
  const HeaderList = () => {
    return <>
      <Header />
      <Text style={styles.title}>{title}</Text>
    </>
  }

  return <FlatList
    data={list}
    renderItem={({ item }) => <Productor {...item} />}
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
});