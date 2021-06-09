import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { currentBook } from "../../../config/currentBook";

import { styles } from "./styles";

import BookIcon from "../../../assets/icons/purple-book.svg";

const CurrentReading = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Currently Reading</Text>
        <TouchableOpacity>
          <Text style={styles.link}>All</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate("BookDetails", { book: currentBook })
        }
        style={{ height: 140, justifyContent: "center" }}
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: currentBook.volumeInfo?.imageLinks?.thumbnail }}
          />
        </View>
        <View style={styles.banner}>
          <Text style={styles.titleBook}>{currentBook.volumeInfo?.title}</Text>
          <Text style={styles.author}>
            by {currentBook.volumeInfo?.authors[0]}
          </Text>
          <View style={styles.readingSteps}>
            <BookIcon />
            <Text style={styles.bottomText}>
              Chapter{" "}
              <Text
                style={[
                  styles.bottomText,
                  { color: "#F66978", fontWeight: "bold" },
                ]}
              >
                2
              </Text>{" "}
              From 9{" "}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CurrentReading;
