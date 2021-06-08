import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import SearchBar from "../../components/SearchBar";
import { styles } from "./styles";

import api from "../../services/APIRequester";
import BookList from "../../components/BookList";
import HomeContent from "../../components/HomeContent";
import ShowMoreButton from "../../components/ShowMoreButton";

const Home = ({ navigation }) => {
  const [bookTitle, setBookTitle] = useState("");
  const [books, setBooks] = useState(null);
  const [showBottomButton, setShowBottomButton] = useState(false);
  const [index, setIndex] = useState(0);

  const numberOfBooks = 21;

  useEffect(() => {
    if (!bookTitle) {
      setBooks(null);
      setShowBottomButton(false);
    } else getBooks(0);
  }, [bookTitle]);

  useEffect(() => {
    if (books?.length) setShowBottomButton(true);
    if (!bookTitle) setBooks(null);
  }, [books]);

  const getBooks = async (index) => {
    const result = await api.getBooks(bookTitle, numberOfBooks, index);
    if (result) setIndex(index + 1);
    if (!bookTitle) return;
    setBooks(result);
  };

  const getMoreBooks = async () => {
    const result = await api.getBooks(
      bookTitle,
      numberOfBooks,
      index * numberOfBooks
    );
    if (result) setIndex(index + 1);
    if (!bookTitle) return;
    setBooks(books.concat(result));
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar
          value={bookTitle}
          setValue={setBookTitle}
          onChangeText={setBookTitle}
          onPress={() => setBookTitle("")}
        />
        {books ? (
          <BookList
            navigation={navigation}
            books={books}
            showBottomButton={showBottomButton}
          />
        ) : (
          <HomeContent navigation={navigation} />
        )}
      </ScrollView>
      <ShowMoreButton onPress={getMoreBooks} visible={showBottomButton} />
    </View>
  );
};

export default Home;
