import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import SearchBar from "../../components/SearchBar";
import { styles } from "./styles";

import api from "../../services/APIRequester";
import BookList from "../../components/BookList";
import HomeContent from "../../components/HomeContent";

const Home = ({ navigation }) => {
  const [bookTitle, setBookTitle] = useState("");
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
    <View style={styles.container}>
      <ScrollView
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
          }
        }}
        showsVerticalScrollIndicator={false}
      >
        <SearchBar
          value={bookTitle}
          setValue={setBookTitle}
          onChangeText={setBookTitle}
          onPress={() => setBookTitle("")}
        />
        {books ? (
          <BookList navigation={navigation} books={books} />
        ) : (
          <HomeContent navigation={navigation} />
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
