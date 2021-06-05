import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  iconContainer: {
    marginLeft: 30,
    marginTop: 55,
    height: 30,
    width: 30,
    position: "absolute",
  },
  header: {
    width: "100%",
    height: 282,
    backgroundColor: colors.lightYellow,
    borderBottomRightRadius: 100,
  },
  imageContainer: {
    width: 151,
    height: 234,
    borderRadius: 5,
    position: "absolute",
    top: 84,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.46,

    elevation: 5,
  },
  image: {
    width: 151,
    height: 234,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontFamily: "sfpro-display-medium",
    fontWeight: "bold",
    paddingTop: 70,
    color: "#313131",
  },
  subtitle: {
    fontSize: 24,
    fontFamily: "sfpro-text-medium",
    fontWeight: "400",
    paddingTop: 70,
    color: "#313131",
  },
  author: {
    fontSize: 16,
    fontFamily: "sfpro-display-medium",
    paddingTop: 7,
    color: "#FF6978",
  },
  description: {
    fontSize: 16,
    fontFamily: "sfpro-text-medium",
    paddingTop: 10,
    color: "#313131",
    opacity: 0.6,
    lineHeight: 25,
    marginBottom: 50,
  },
  body: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});
