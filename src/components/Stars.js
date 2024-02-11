import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import star from '../assets/estrela.png'
import starGray from '../assets/estrelaCinza.png'

export default function Stars({
  amount: previousAmount,
  editable = false,
  big = false,
}) {
  const [amount, setAmount] = useState(previousAmount);
  const styles = stylesFunction(big);
  const getImage = (index) => {
    if (index < amount) {
      return star;
    }
    return starGray;
  }
  const RenderStars = () => {
    const listStars = [];
    for (let i = 0; i < 5; i++) {
      listStars.push(
        <TouchableOpacity
          key={i}
          onPress={() => setAmount(i + 1)}
          disabled={!editable}
        >
          <Image source={getImage(i)} style={styles.star} />
        </TouchableOpacity>
      );
    }
    return listStars;
  }
  return <View style={styles.stars}>
    <RenderStars />
  </View>
}

const stylesFunction = (big) => StyleSheet.create({
  stars: {
    flexDirection: 'row',
  },
  star: {
    width: big ? 36 : 12,
    height: big ? 36 : 12,
    marginRight: 2,
  }
});