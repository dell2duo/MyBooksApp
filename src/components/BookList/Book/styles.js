import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 15,
  },
  image: {
    width: 105,
    height: 153,
    borderRadius: 5,
  },
  shadow: {
    width: 105,
    height: 153,
    backgroundColor: "transparent",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 5,
  },
  title: {
    fontSize: 12,
    maxWidth: 100,
    paddingTop: 10,
  },
  author: {
    fontSize: 10,
    maxWidth: 100,
    paddingTop: 5,
  },
});
