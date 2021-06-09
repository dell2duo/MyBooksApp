import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../styles/colors";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 30,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    marginRight: 20,
    marginLeft: 20,
  },
  title: {
    color: colors.darkGray,
    fontSize: 18,
    fontFamily: "sfpro-display-medium",
  },
  link: {
    color: colors.blue,
    fontFamily: "sfpro-text-medium",
  },
  banner: {
    alignSelf: "center",
  },
  image: {
    borderRadius: 5,
    width: windowWidth - 40,
  },
});
