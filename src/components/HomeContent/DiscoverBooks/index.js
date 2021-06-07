import React, { useRef } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

import Carousel from "react-native-snap-carousel";
import BookCard from "../BookCard";

import { styles } from "./styles";

const sliderWidth = Dimensions.get("window").width;
const itemWidth = Math.round(sliderWidth * 0.8);

const DiscoverBooks = ({ navigation }) => {
  const carouselRef = useRef();

  const data = [
    {
      title: "Hooked",
      author: "Nir Eyal",
      numberOfReads: 55,
      thumbnail: "https://m.media-amazon.com/images/I/41q7gZyFigL.jpg",
      color: "#00173D",
      navigation,
    },
    {
      title: "Game of Thrones",
      author: "George R.R. Martin",
      numberOfReads: 176,
      thumbnail:
        "https://images-na.ssl-images-amazon.com/images/I/A1MExOEakfL.jpg",
      color: "#451475",
      navigation,
    },
    {
      title: "Lord of The Rings",
      author: "J.R.R. Tolkien",
      numberOfReads: 343,
      thumbnail:
        "https://images-na.ssl-images-amazon.com/images/I/51EstVXM1UL.jpg",
      color: "#00173D",
      navigation,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Discover new book</Text>
        <TouchableOpacity>
          <Text style={styles.link}>More</Text>
        </TouchableOpacity>
      </View>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={BookCard}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        layout={"default"}
        activeSlideAlignment={"start"}
        useScrollView
        inactiveSlideShift={0}
        containerCustomStyle={{ paddingLeft: 20, paddingRight: 20 }}
      />
    </View>
  );
};

export default DiscoverBooks;
