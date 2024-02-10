import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import logo from '../../../assets/logo.png';
import { loadingHeader } from '../../../services/dataLoading';

class Header extends React.Component {
  state = {
    header: {
      welcome: '',
      subtitle: '',
    }
  }

  updateTop() {
    const retorno = loadingHeader();
    this.setState({ header: retorno });
  }

  componentDidMount() {
    this.updateTop();
  }

  render() {
    return <View style={styles.top}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.welcome}>{this.state.header.welcome}</Text>
      <Text style={styles.subtitle}>{this.state.header.subtitle}</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#F6F6F6',
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
    fontWeight: 'bold',
    color: '#464646'
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3'
  }
});

export default Header;