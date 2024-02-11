import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import star from '../assets/estrela.png'
import starGray from '../assets/estrelaCinza.png'

export default function Star({
  onPress,
  disableed = true,
  completed,
  big = false,
}) {
  const styles = stylesFunction(big);

  const getImage = () => {
    if (completed) {
      return star;
    }
    return starGray;
  }

  return <TouchableOpacity
    onPress={onPress}
    disabled={disableed}
  >
    <Image source={getImage()} style={styles.star} />
  </TouchableOpacity>
}

const stylesFunction = (big) => StyleSheet.create({
  star: {
    width: big ? 36 : 12,
    height: big ? 36 : 12,
    marginRight: 2,
  }
});