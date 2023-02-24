import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  labelPhoto: {
    color: "#BDBDBD",
    fontSize: 16,
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    fontSize: 16,
    marginTop: 16,
    justifyContent: "center",
  },

  confirmBtn: {
    marginTop: 32,
    height: 51,
    borderRadius: 100,

    alignItems: "center",
    justifyContent: "center",
  },

  confirmBtnTextDisable: {
    color: "#BDBDBD",
  },
  confirmBtnText: {
    color: "#FFFFFF",
  },
  bottomBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 40,
  },
  deleteBtn: {
    width: 70,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    backgroundColor: "#F6F6F6",
  },
});
