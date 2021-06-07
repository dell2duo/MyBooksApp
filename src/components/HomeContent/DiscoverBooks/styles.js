import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
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
});
