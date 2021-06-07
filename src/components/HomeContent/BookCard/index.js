import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import Numbers from "../../../assets/icons/numbers.svg";

const BookCard = ({ item, index }) => {
  console.log(item, index);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      key={index}
      style={[styles.container, { backgroundColor: item.color }]}
      onPress={() => item.navigation.navigate("BookDetails", { item })}
    >
      <View style={styles.column}>
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.author}>{item.author}</Text>
        <View style={styles.readCount}>
          <Numbers />
          <Text style={styles.readNumber}>
            <Text style={[styles.readNumber, { fontWeight: "bold" }]}>
              {item.numberOfReads % 10}0
            </Text>
            + Read Now
          </Text>
        </View>
      </View>
      <Image style={styles.image} source={{ uri: item.thumbnail }} />
    </TouchableOpacity>
  );
};

export default BookCard;
