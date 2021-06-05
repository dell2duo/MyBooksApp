import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import uuid from "react-native-uuid";

import Book from "./Book";

const BookList = ({ books, navigation }) => {
  const [parsedBooks, setParsedBooks] = useState([]);

  useEffect(() => {
    createColumns();
  }, [books]);

  const createColumns = () => {
    let auxBooksArray = [];
    for (let i = 0; i < books.length; ) {
      let column = [];
      for (let j = 0; j < 3; j++) {
        if (books[i]) column.push(books[i]);
        i++;
      }
      auxBooksArray.push(column);
    }
    setParsedBooks(auxBooksArray);
  };

  return (
    <View
      style={{
        alignItems: "center",
        marginTop: 40,
        backgroundColor: "transparent",
      }}
    >
      {parsedBooks.map((column) => (
        <View key={uuid.v4()} style={{ flexDirection: "row" }}>
          {column.map((book) => (
            <Book navigation={navigation} key={uuid.v4()} book={book} />
          ))}
        </View>
      ))}
    </View>
  );
};

export default BookList;
