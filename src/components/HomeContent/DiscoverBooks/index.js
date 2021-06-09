import React, { useRef } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

import Carousel from "react-native-snap-carousel";
import { newBooks } from "../../../config/newBooks";
import BookCard from "../BookCard";

import { styles } from "./styles";

const sliderWidth = Dimensions.get("window").width;
const itemWidth = Math.round(sliderWidth * 0.8);

const DiscoverBooks = ({ navigation }) => {
  const carouselRef = useRef();

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
        data={newBooks}
        renderItem={({ item, index }) => (
          <BookCard item={item} index={index} navigation={navigation} />
        )}
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
