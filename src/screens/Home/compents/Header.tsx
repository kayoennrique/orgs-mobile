import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import logo from '../../../assets/logo.png';
import { loadingHeader } from '../../../services/dataLoading';

class Header extends React.Component {
  updateTop() {
    const retorno = loadingHeader();
    console.log(retorno);
  }

  componentDidMount() {
    this.updateTop();
  }

  render() {
    return <View style={styles.top}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.welcome}>Olá, Kayo Ennrique!</Text>
      <Text style={styles.subtitle}>Encontre os melhores produtores</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#f6f6f6',
    padding: 16,
  },
  image: {
    width: 70,
    height: 28,
  },
  welcome: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 26,
  }
});

export default Header;