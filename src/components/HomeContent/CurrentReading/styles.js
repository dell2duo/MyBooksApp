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
  image: {
    height: 136,
    width: 91,
  },
  imageContainer: {
    position: "absolute",
    marginLeft: 20,

    height: 136,
    width: 91,

    shadowColor: "#8CAA3A",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.46,

    elevation: 5,

    zIndex: 2,
  },
  titleBook: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 27,
    color: "#2A2B26",
    letterSpacing: 2,
    width: 180,
  },
  author: {
    fontFamily: "Roboto_400Regular",
    fontSize: 14,
    color: "#74776D",
    marginTop: 5,
  },
  readingSteps: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  banner: {
    width: "90%",
    paddingLeft: 120,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#EEF5DB",
    borderRadius: 5,
  },
  bottomText: {
    fontFamily: "sfpro-display-medium",
    marginLeft: 5,
  },
});
