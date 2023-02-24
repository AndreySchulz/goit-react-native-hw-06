import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  camera: {
    flex: 1,

    justifyContent: "flex-end",
  },
  cameraBtnBox: {
    position: "relative",
    width: "100%",
    paddingBottom: 40,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0000004d",
  },
  cameraBtn: {
    width: 75,
    height: 75,

    borderRadius: 100,
    backgroundColor: "#ffff",
  },
  togleCameraBtn: {
    position: "absolute",
    right: "15%",
    top: "50%",
  },
});
