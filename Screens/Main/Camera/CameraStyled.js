import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 32,
  },
  TapPhotoBox: {
    width: "100%",

    justifyContent: "flex-end",
  },
  photoBox: {
    width: "100%",
    height: 267,
    marginBottom: 8,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  photoBoxIcon: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#ffff",
  },
  image: {
    width: "100%",
    flex: 1,
  },

  confirmBtn: {
    height: 51,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
  },
  confirmBtnText: {
    color: "#FFFFFF",
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
    top: "35%",
  },
});
