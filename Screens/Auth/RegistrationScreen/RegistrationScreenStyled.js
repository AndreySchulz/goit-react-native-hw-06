import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
  container: {
    position: "relative",

    justifyContent: "center",

    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  // start

  userPhoto: {
    position: "absolute",
    top: -60,
    right: "50%",
    transform: [{ translateX: 60 }],
    maxWidth: 120,
    minWidth: 120,
    height: 120,
    borderRadius: 30,

    backgroundColor: "#F6F6F6",
  },
  // end
  header: {
    marginTop: 92,
    marginBottom: 16,
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 30,
    // lineHeight: 1.16,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
  },
  form: {
    marginHorizontal: 16,
    marginBottom: 79,
  },
  formInput: {
    height: 50,
    // marginHorizontal: 16,
    paddingLeft: 16,
    marginTop: 16,
    backgroundColor: "#F6F6F6",

    color: "#212121",
    borderColor: "#FFFFFF",
    height: 50,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    fontFamily: "Roboto",
    fontSize: 16,
  },
  formButton: {
    marginTop: 43,

    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  formButtonText: {
    fontFamily: "Roboto",
    fontWeight: 400,

    color: "#FFFFFF",
  },

  fornLink: {
    fontFamily: "Roboto",
    fontWeight: 400,
    marginTop: 16,
    textAlign: "center",
  },
});
