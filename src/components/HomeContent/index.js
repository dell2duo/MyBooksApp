import React from "react";
import { Text, View } from "react-native";
import CurrentReading from "./CurrentReading";
import DailyReviews from "./DailyReviews";
import DiscoverBooks from "./DiscoverBooks";
import { styles } from "./styles";

const HomeContent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        Hi, <Text style={[styles.name, styles.nameRed]}>Mehmed Al Fatih</Text>{" "}
        👋
      </Text>

      <DiscoverBooks navigation={navigation} />
      <CurrentReading navigation={navigation} />
      <DailyReviews />
    </View>
  );
};

export default HomeContent;
