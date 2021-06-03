import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import banner from "../../../assets/images/banners/banner1.png";

const DiscoverBooks = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Discover new book</Text>
        <TouchableOpacity>
          <Text style={styles.link}>More</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        <Image source={banner} />
      </ScrollView>
    </View>
  );
};

export default DiscoverBooks;
