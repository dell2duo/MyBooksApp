import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

import Banner from "../../../assets/images/banners/video.png";

const DailyReviews = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Reviews of The Days</Text>
        <TouchableOpacity>
          <Text style={styles.link}>All Video</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.8} style={styles.banner}>
        <Image style={styles.image} source={Banner} />
      </TouchableOpacity>
    </View>
  );
};

export default DailyReviews;
