import React from "react";
import { TextInput, View } from "react-native";

import Search from "../../assets/icons/search.svg";
import { styles } from "./styles";

const SearchBar = ({ ...rest }) => {
  return (
    <View style={styles.container}>
      <Search height={16} width={16} />
      <TextInput
        placeholder="Search Book"
        style={styles.input}
        placeholderTextColor={"#54565A"}
        {...rest}
      />
    </View>
  );
};

export default SearchBar;
