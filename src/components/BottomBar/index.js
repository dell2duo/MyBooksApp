import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import BookIcon from "../../assets/icons/book-open.svg";
import Headphones from "../../assets/icons/headphones.svg";
import Share from "../../assets/icons/share.svg";

const BottomBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.6} style={styles.button}>
        <BookIcon />
        <Text style={styles.text}>Read</Text>
      </TouchableOpacity>
      <View style={styles.line} />
      <TouchableOpacity activeOpacity={0.6} style={styles.button}>
        <Headphones />
        <Text style={styles.text}>Listen</Text>
      </TouchableOpacity>
      <View style={styles.line} />
      <TouchableOpacity activeOpacity={0.6} style={styles.button}>
        <Share />
        <Text style={styles.text}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomBar;
