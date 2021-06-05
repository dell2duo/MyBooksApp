import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import uuid from "react-native-uuid";

import Back from "../../assets/icons/back.svg";
import HeaderIcons from "../../assets/icons/headerIcons.svg";
import book_placeholder from "../../assets/images/book-placeholder-small.png";
import BottomBar from "../../components/BottomBar";
import { styles } from "./styles";

const BookDetails = ({
  route: {
    params: { book },
  },
  navigation,
}) => {
  // console.log("book object", book);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [description, setDescription] = useState([]);

  useEffect(() => {
    parseBookInfo();
  }, [book]);

  const parseBookInfo = () => {
    if (book) {
      setTitle(book.volumeInfo.title);
      setSubtitle(book.volumeInfo.subtitle);
      parseDescription(book.volumeInfo.description);
      if (book.volumeInfo.authors) {
        setAuthor(book.volumeInfo.authors[0]);
      }
      if (book.volumeInfo.imageLinks) {
        setThumbnail(book.volumeInfo.imageLinks.thumbnail);
      }
    }
  };

  const parseDescription = (rawDescription) => {
    if (!rawDescription) return;
    const replacedCharactersDescription = rawDescription
      .replace(/[?]/g, "?*")
      .replace(/[:]/g, ":*")
      .replace(/[.]/g, ".*");

    const descriptionArray = replacedCharactersDescription.split("*");
    setDescription(descriptionArray);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <HeaderIcons style={{ left: "-20%" }} width="160%" height={282} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.6}
            style={styles.iconContainer}
          >
            <Back width={14} height={14} />
          </TouchableOpacity>
          {thumbnail ? (
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: thumbnail }} />
            </View>
          ) : (
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={book_placeholder} />
            </View>
          )}
        </View>

        <View style={styles.body}>
          <Text style={styles.title}>
            {title} <Text style={styles.subtitle}>: {subtitle}</Text>
          </Text>
          <Text style={styles.author}>{author}</Text>
          {description.map((text) => (
            <Text key={uuid.v4()} style={styles.description}>
              {text.charAt(0) === " " ? text.replace(" ", "") : text}
            </Text>
          ))}
        </View>
      </ScrollView>
      <BottomBar />
    </View>
  );
};

export default BookDetails;
