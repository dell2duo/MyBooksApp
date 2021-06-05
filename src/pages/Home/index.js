import React, { useEffect, useState } from "react";
import {
  Keyboard,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import SearchBar from "../../components/SearchBar";
import { styles } from "./styles";

import api from "../../services/APIRequester";
import BookList from "../../components/BookList";
import HomeContent from "../../components/HomeContent";

const Home = ({ navigation }) => {
  const [bookTitle, setBookTitle] = useState();
  const [books, setBooks] = useState(null);

  useEffect(() => {
    if (!bookTitle) {
      setBooks(null);
    } else getBooks();
  }, [bookTitle]);

  useEffect(() => {
    if (!bookTitle) setBooks(null);
  }, [books]);

  const getBooks = async () => {
    const result = await api.getBooks(bookTitle, 21, 0);
    if (!bookTitle) return;
    setBooks(result);
  };

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  return (
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <ScrollView
      onScroll={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent)) {
        }
      }}
    >
      <View style={styles.container}>
        <SearchBar value={bookTitle} onChangeText={setBookTitle} />
        {books ? (
          <BookList navigation={navigation} books={books} />
        ) : (
          <HomeContent />
        )}
      </View>
    </ScrollView>
    // </TouchableWithoutFeedback>
  );
};

export default Home;
