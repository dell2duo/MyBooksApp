import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

import book_placeholder from "../../../assets/images/book-placeholder-small.png";

const Book = ({ book }) => {
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

  return (
    <View style={styles.container}>
      {thumbnail ? (
        <View style={styles.shadow}>
          <Image style={styles.image} source={{ uri: thumbnail }} />
        </View>
      ) : (
        <View style={styles.shadow}>
          <Image style={styles.image} source={book_placeholder} />
        </View>
      )}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>by {author}</Text>
    </View>
  );
};

export default Book;
