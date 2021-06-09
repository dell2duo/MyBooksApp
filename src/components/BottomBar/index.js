import React from "react";
import { Linking, Share, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import BookIcon from "../../assets/icons/book-open.svg";
import Headphones from "../../assets/icons/headphones.svg";
import ShareIcon from "../../assets/icons/share.svg";

const BottomBar = ({ book }) => {
  const shareBook = async () => {
    try {
      const result = await Share.share({
        message: `Hi! Check out the book I'm interested in reading! ${book.volumeInfo?.infoLink} `,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => Linking.openURL(book.volumeInfo?.previewLink)}
        activeOpacity={0.6}
        style={styles.button}
      >
        <BookIcon />
        <Text style={styles.text}>Read</Text>
      </TouchableOpacity>
      <View style={styles.line} />
      <TouchableOpacity
        onPress={() => Linking.openURL(book.volumeInfo?.infoLink)}
        activeOpacity={0.6}
        style={styles.button}
      >
        <Headphones />
        <Text style={styles.text}>Listen</Text>
      </TouchableOpacity>
      <View style={styles.line} />
      <TouchableOpacity
        onPress={shareBook}
        activeOpacity={0.6}
        style={styles.button}
      >
        <ShareIcon />
        <Text style={styles.text}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomBar;
