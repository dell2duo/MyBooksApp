import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    // flex: 1,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    alignSelf: "center",
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  input: {
    width: 290,
    backgroundColor: "transparent",
    paddingRight: 15,
    marginLeft: 10,
    color: "#000",
  },
  cleanButton: {
    height: 25,
    width: 25,
  },
});
