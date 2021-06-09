import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import Numbers from "../../../assets/icons/numbers.svg";

const BookCard = ({ item: book, index, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      key={index}
      style={[styles.container, { backgroundColor: book.color }]}
      onPress={() => navigation.navigate("BookDetails", { book })}
    >
      <View style={styles.column}>
        <Text numberOfLines={1} style={styles.title}>
          {book.volumeInfo?.title || ""}
        </Text>
        <Text style={styles.author}>{book.volumeInfo?.authors[0]}</Text>
        <View style={styles.readCount}>
          <Numbers />
          <Text style={styles.readNumber}>
            <Text style={[styles.readNumber, { fontWeight: "bold" }]}>
              {book.numberOfReads % 10}0
            </Text>
            + Read Now
          </Text>
        </View>
      </View>
      <Image
        style={styles.image}
        source={{ uri: book.volumeInfo?.imageLinks?.thumbnail }}
      />
    </TouchableOpacity>
  );
};

export default BookCard;
