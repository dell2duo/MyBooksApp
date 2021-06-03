import React, { useEffect, useState } from "react";
import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import SearchBar from "../../components/SearchBar";
import { styles } from "./styles";

import api from "../../services/APIRequester";

const Home = () => {
  const [bookTitle, setBookTitle] = useState();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (!bookTitle) return;

    setBooks(api.getBooks(bookTitle, 20, 5));
  }, [bookTitle]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <SearchBar value={bookTitle} onChangeText={setBookTitle} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;
