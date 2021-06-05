import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    flexGrow: 1,
    width: Dimensions.get("window").width - 40,
    height: 56,
    backgroundColor: "#fff",
    bottom: 50,
    borderRadius: 2,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-evenly",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.46,

    elevation: 5,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 10,
    fontFamily: "sfpro-display-medium",
    fontWeight: "700",
    letterSpacing: 1,
    color: "#3F4043",
  },
  line: {
    width: 2,
    height: 18,
    backgroundColor: "#979797",
    opacity: 0.2,
  },
});
