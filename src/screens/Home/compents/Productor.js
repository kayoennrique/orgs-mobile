import React, { useReducer } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Stars from "../../../components/Stars";

export default function Productor({ name, image, distance, stars }) {
  const [selected, invertSelected] = useReducer(
    (selected) => !selected,
    false
  );

  return <TouchableOpacity
    style={styles.card}
    onPress={invertSelected}
  >
    <Image source={image} style={styles.image} accessibilityLabel={name} />
    <View style={styles.informations}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Stars
          amount={stars}
          editable={selected}
          big={selected}
        />
      </View>
      <Text style={distance}>{distance}</Text>
    </View>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: "row",

    // Android
    elevation: 4,

    // iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  informations: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  name: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distance: {
    fontSize: 12,
    lineHeight: 19,
  },
});