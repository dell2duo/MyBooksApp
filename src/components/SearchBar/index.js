import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

import Search from "../../assets/icons/search.svg";
import Clean from "../../assets/icons/clean.svg";
import { styles } from "./styles";

const SearchBar = ({ value, onPress, ...rest }) => {
  return (
    <View style={styles.container}>
      <Search height={16} width={16} />
      <TextInput
        placeholder="Search Book"
        style={styles.input}
        placeholderTextColor={"#54565A"}
        value={value}
        {...rest}
      />
      {value !== "" && (
        <TouchableOpacity
          style={styles.cleanButton}
          onPress={onPress}
          activeOpacity={0.6}
        >
          <Clean height={21} width={21} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;
