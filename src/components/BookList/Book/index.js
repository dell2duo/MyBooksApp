import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import book_placeholder from "../../../assets/images/book-placeholder-small.png";

const Book = ({ book, navigation }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    parseBookInfo();
  }, [book]);

  const parseBookInfo = () => {
    if (book) {
      setTitle(book.volumeInfo.title);
      if (book.volumeInfo.authors) {
        setAuthor(book.volumeInfo.authors[0]);
      }
      if (book.volumeInfo.imageLinks) {
        setThumbnail(book.volumeInfo.imageLinks.thumbnail);
      }
    }
  };

  const showDetails = () => {
    navigation.navigate("BookDetails", { book });
  };

  return (
    <View style={styles.container}>
      {thumbnail ? (
        <TouchableOpacity
          onPress={showDetails}
          activeOpacity={0.8}
          style={styles.shadow}
        >
          <Image style={styles.image} source={{ uri: thumbnail }} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={showDetails}
          activeOpacity={0.8}
          style={styles.shadow}
        >
          <Image style={styles.image} source={book_placeholder} />
        </TouchableOpacity>
      )}
      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>
      <Text numberOfLines={1} style={styles.author}>
        by {author}
      </Text>
    </View>
  );
};

export default Book;
