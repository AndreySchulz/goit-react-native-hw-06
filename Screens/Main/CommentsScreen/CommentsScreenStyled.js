import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  sendBtn: {
    position: "absolute",
    right: 8,
    top: 16,
    height: 34,
    width: 34,
    backgroundColor: "#FF6C00",
    borderRadius: 34,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 50,
    padding: 16,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    fontSize: 16,
    lineHeight: 19,
  },
  commentBox: {
    flexDirection: "row",
    marginBottom: 24,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 28,
    marginRight: 16,
  },
  messageBox: {
    padding: 16,
    backgroundColor: "#00000008",
    borderRadius: 6,
    borderTopLeftRadius: 0,
  },
  message: {
    marginBottom: 8,
    color: "#212121",
    fontFamily: "Roboto400",
    fontSize: 13,
    lineHeight: 18,
  },
  date: {
    color: "#BDBDBD",
    fontFamily: "Roboto400",
    fontSize: 10,
    lineHeight: 12,
  },
});
