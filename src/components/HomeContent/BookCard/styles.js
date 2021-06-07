import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 140,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  column: {},
  readCount: {
    flexDirection: "row",
    marginTop: 30,
  },
  image: {
    height: 110,
    width: 70,
  },
  title: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 27,
    color: "#FEFEFE",
    letterSpacing: 2,
    width: 180,
  },
  author: {
    fontFamily: "sfpro-display-medium",
    fontSize: 14,
    fontStyle: "italic",
    color: "#E7E7E1",
    letterSpacing: 2,
  },
  readNumber: {
    marginLeft: 2,
    fontFamily: "sfpro-display-medium",
    fontSize: 10,
    color: "#E7E7E1",
  },
});
